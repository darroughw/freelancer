import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WorkCard from "./WorkCard";
import { sampleCaseStudyA, sampleCaseStudyB } from "./sample-data";

const meta: Meta<typeof WorkCard> = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A case-study teaser card for the home page's work shelf. The whole card is one `<Link>` (Fitts's Law: a bigger click target beats a smaller one), and tags wrap across as many lines as they need rather than truncating to a fixed count.",
      },
    },
  },
  argTypes: {
    study: {
      control: false,
      description: "The full CaseStudy record. Too shaped (image path, tags array, etc.) for a generic Controls editor — see the Default/ManyTags stories for realistic values, or edit `args` in this file directly.",
    },
    featured: {
      description: "The larger, two-column treatment used for the home page's single featured case study (currently the newest one). Splits into an image/content row above 640px; stacks like the default card below it.",
    },
  },
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

export const Featured: Story = {
  args: { study: sampleCaseStudyA, featured: true },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 720 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "The home page shows exactly one of these — the newest case study — above the regular grid.",
      },
    },
  },
};
