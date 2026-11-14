import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import WorkCard from "./WorkCard";
import { sampleCaseStudyA, sampleCaseStudyB } from "./sample-data";

// WorkCard sizes itself to its bento grid cell, so every story renders it
// inside a real `.bento` grid with a span class rather than a fixed-width box.
const inBento = (Story: () => JSX.Element) => (
  <div className="bento" style={{ padding: 0, maxWidth: 1100 }}>
    <Story />
  </div>
);

const meta: Meta<typeof WorkCard> = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A case-study tile in the home page's Selected Work bento grid. The whole tile is one `<Link>` (Fitts's Law: a bigger click target beats a smaller one). Tone, shape and the grid span are set per tile by the page's `BENTO_LAYOUT`; see Patterns → Bento Grid. Only the featured tile shows the description, tags and arrow; the others show image, number, title and meta.",
      },
    },
  },
  argTypes: {
    study: {
      control: false,
      description: "The full CaseStudy record. Too shaped (image path, tags array, etc.) for a generic Controls editor; see `sample-data.ts`.",
    },
    featured: {
      description: "The large lead tile (the newest case study). Adds the eyebrow, description, tags and \"View case study\" arrow. Pair with `className=\"span-7x3\"`.",
    },
    tone: {
      control: "select",
      options: ["cream", "red", "orange", "periwinkle", "ink"],
      description: "Tile background from the palette; text color follows it so it always clears AA. `red` renders red-deep.",
    },
    shape: {
      control: "inline-radio",
      options: ["tall", "row"],
      description: "`tall`: image on top, text below. `row`: short tile with the thumbnail beside the text, for 1-row spans.",
    },
    className: {
      control: "select",
      options: ["span-7x3", "span-5x2", "span-4x2", "span-3x2", "span-5x1", "span-12x1"],
      description: "The bento span class: columns × rows on the 12-column desktop grid.",
    },
  },
  decorators: [inBento],
};

export default meta;
type Story = StoryObj<typeof WorkCard>;

export const Default: Story = {
  args: { study: sampleCaseStudyA, tone: "cream", shape: "tall", className: "span-4x2" },
};

export const Featured: Story = {
  args: { study: sampleCaseStudyA, featured: true, tone: "cream", shape: "tall", className: "span-7x3" },
  parameters: {
    docs: {
      description: {
        story: "The home page shows exactly one of these, the newest case study, as the first tile in the grid.",
      },
    },
  },
};

export const Row: Story = {
  args: { study: sampleCaseStudyB, tone: "ink", shape: "row", className: "span-12x1" },
  parameters: {
    docs: {
      description: {
        story: "Row shape on a full-width 1-row span. The description shows here (clamped to two lines) because the tile is wide enough for it.",
      },
    },
  },
};

export const AllTones: Story = {
  parameters: {
    docs: {
      description: {
        story: "One tall tile in each tone, side by side, to check text and the number sticker read on every background.",
      },
    },
  },
  render: () => (
    <>
      {(["cream", "red", "orange", "periwinkle", "ink"] as const).map((tone, i) => (
        <WorkCard
          key={tone}
          study={{ ...sampleCaseStudyA, num: `00${i + 1}`, title: `Tone: ${tone}` }}
          tone={tone}
          className={i < 3 ? "span-4x2" : i === 3 ? "span-5x2" : "span-7x2"}
        />
      ))}
    </>
  ),
};
