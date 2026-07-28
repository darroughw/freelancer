import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WorkCard from "./WorkCard";
import { caseStudies } from "../data/case-studies";

const delta = caseStudies.find((s) => s.slug === "delta")!;
const liberty = caseStudies.find((s) => s.slug === "liberty")!;

const meta: Meta<typeof WorkCard> = {
  title: "Components/WorkCard",
  component: WorkCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WorkCard>;

export const Default: Story = {
  args: { study: delta },
};

export const ManyTags: Story = {
  args: { study: liberty },
};
