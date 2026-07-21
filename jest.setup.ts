import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

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
});
