import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);
// jest-axe passed. Real users may still disagree, but at least the robots are happy.

type ObserverEntry = { target: Element; isIntersecting: boolean };
type ObserverCallback = (entries: ObserverEntry[]) => void;

export class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  callback: ObserverCallback;
  observed: Element[] = [];

  constructor(callback: ObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  observe(el: Element) {
    this.observed.push(el);
  }

  unobserve(el: Element) {
    this.observed = this.observed.filter((e) => e !== el);
  }

  disconnect() {
    this.observed = [];
  }
}

beforeEach(() => {
  MockIntersectionObserver.instances = [];
  // @ts-expect-error - test double, not a full IntersectionObserver implementation
  global.IntersectionObserver = MockIntersectionObserver;

  // jsdom doesn't implement matchMedia at all. Default to "no preference"
  // (matches: false) so components that branch on prefers-reduced-motion
  // exercise their normal-motion path by default in tests.
  global.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
});
