import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SiteHeader from "./SiteHeader";
import NavPills from "./NavPills";

const meta: Meta<typeof SiteHeader> = {
  title: "Components/SiteHeader",
  component: SiteHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Page header after the Master-View album cover: a cream band with the square ink kingfisher mark linking home, the name in red Kanit with an ink outline and a stepped extrusion down and to the left, and a white pill status badge (big red number, \"Open to work\"). Below it, a sticky orange strip with the role and, when `nav` is passed, the section nav on the right. The badge hides at 760px and below. Defaults to Darrough's real name in production — stories override it with a placeholder so this doc doesn't ship real contact info.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  args: {
    name: "Jordan Doe",
  },
};

export const LongName: Story = {
  parameters: {
    docs: {
      description: {
        story: "A longer name, to check that the header holds its layout instead of overflowing or crowding the logo mark.",
      },
    },
  },
  args: {
    name: "Jordan Alexander Doe-Whitmore",
  },
};

export const WithNav: Story = {
  parameters: {
    docs: {
      description: {
        story: "How the home page renders it: section nav in the strip. Narrow the viewport below 900px to see the nav move to the bottom bar.",
      },
    },
  },
  args: {
    name: "Jordan Doe",
    nav: <NavPills activeSection="work" />,
  },
};

export const CustomBadge: Story = {
  args: {
    name: "Jordan Doe",
    badgeNumber: "07",
    badgeLabel: "Booked",
    badgeSub: "back in March",
  },
};
