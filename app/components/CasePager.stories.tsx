import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CasePager from "./CasePager";
import { caseStudies } from "../data/case-studies";

const meta: Meta<typeof CasePager> = {
  title: "Components/CasePager",
  component: CasePager,
};

export default meta;
type Story = StoryObj<typeof CasePager>;

export const Default: Story = {
  args: {
    prev: caseStudies.find((s) => s.slug === "youfit")!,
    next: caseStudies.find((s) => s.slug === "delta")!,
  },
};
