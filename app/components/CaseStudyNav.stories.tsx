import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CaseStudyNav from "./CaseStudyNav";

const meta: Meta<typeof CaseStudyNav> = {
  title: "Components/CaseStudyNav",
  component: CaseStudyNav,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Sticky section jump-nav for case-study detail pages, added alongside the results strip so a reader can skim or jump instead of only scrolling linearly. The active link is driven by the same `useScrollSpy` hook (and its `IntersectionObserver`) as the home page's bottom nav, watching for elements whose id matches a slugified heading. In this isolated story there's no real page scroll for it to observe, so it always previews with the first heading active — see the real case-study pages for the live scroll-spy behavior.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CaseStudyNav>;

export const Default: Story = {
  args: {
    headings: [
      "Overview",
      "What It Is",
      "Where It Got Interesting: Accessibility",
      "Testing",
      "Responsive & Deploy",
      "What This Demonstrates",
    ],
  },
};

export const LongHeadings: Story = {
  parameters: {
    docs: {
      description: {
        story: "A heading long enough to wrap, to check the link's line-height and left border stay readable instead of just fitting the short common case.",
      },
    },
  },
  args: {
    headings: [
      "Overview",
      "The Problem: Users Were Searching for Help the Site Wasn't Providing",
      "What This Demonstrates",
    ],
  },
};
