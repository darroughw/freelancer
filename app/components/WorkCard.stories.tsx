import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WorkCard from "./WorkCard";
import { sampleCaseStudyA, sampleCaseStudyB } from "./sample-data";

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
  args: { study: sampleCaseStudyA },
};

export const ManyTags: Story = {
  args: { study: sampleCaseStudyB },
};
