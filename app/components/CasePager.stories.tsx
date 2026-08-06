import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CasePager from "./CasePager";
import { sampleCaseStudyA, sampleCaseStudyB } from "./sample-data";

const meta: Meta<typeof CasePager> = {
  title: "Components/CasePager",
  component: CasePager,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Prev/next case-study links at the bottom of a case-study detail page. Navigation is cyclical at the data level (the last case study's \"next\" wraps to the first) — this component just renders whatever `prev`/`next` studies it's given, with no wrap-around logic of its own.",
      },
    },
  },
  argTypes: {
    prev: { control: false, description: "The full CaseStudy record to link back to — too shaped for a generic Controls editor." },
    next: { control: false, description: "The full CaseStudy record to link forward to — too shaped for a generic Controls editor." },
  },
};

export default meta;
type Story = StoryObj<typeof CasePager>;

export const Default: Story = {
  args: {
    prev: sampleCaseStudyA,
    next: sampleCaseStudyB,
  },
};

export const BothLongTitles: Story = {
  parameters: {
    docs: {
      description: {
        story: "Both links carrying a long title at once, to check that the prev/next columns wrap independently rather than one pushing the other off balance.",
      },
    },
  },
  args: {
    prev: sampleCaseStudyB,
    next: { ...sampleCaseStudyB, slug: "sample-project-three", title: "Sample Project: Yet Another Long Title, This Time With a Comma" },
  },
};
