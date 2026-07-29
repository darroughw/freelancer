import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CasePager from "./CasePager";
import { sampleCaseStudyA, sampleCaseStudyB } from "./sample-data";

const meta: Meta<typeof CasePager> = {
  title: "Components/CasePager",
  component: CasePager,
};

export default meta;
type Story = StoryObj<typeof CasePager>;

export const Default: Story = {
  args: {
    prev: sampleCaseStudyA,
    next: sampleCaseStudyB,
  },
};
