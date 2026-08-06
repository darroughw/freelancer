import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NavPills, { NAV_ITEMS } from "./NavPills";

const meta: Meta<typeof NavPills> = {
  title: "Components/NavPills",
  component: NavPills,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The bottom pill nav. `activeSection` is normally driven by the home page's `IntersectionObserver` scroll-spy, not user selection — these stories fix it to each value to preview the resulting `.is-active` + `aria-current` state in isolation. One story per `NAV_ITEMS` entry, so a new section added there gets a gap here as a reminder to add its story too.",
      },
    },
  },
  argTypes: {
    activeSection: {
      control: "select",
      options: NAV_ITEMS.map((item) => item.id),
      description: "Section id currently in view. Must match one of `NAV_ITEMS`'s ids to highlight a pill — any other value (including empty) renders all pills inactive.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavPills>;

export const WorkActive: Story = {
  args: { activeSection: "work" },
};

export const AboutActive: Story = {
  args: { activeSection: "about" },
};

export const SkillsActive: Story = {
  args: { activeSection: "skills" },
};

export const OffDutyActive: Story = {
  args: { activeSection: "topfives" },
};

export const ContactActive: Story = {
  args: { activeSection: "contact" },
};

export const NoneActive: Story = {
  parameters: {
    docs: {
      description: {
        story: "An id that matches nothing in `NAV_ITEMS` — every pill renders inactive. Shouldn't happen from the real scroll-spy (it always force-activates `contact` at the bottom of the page), but documents that the component degrades gracefully rather than erroring.",
      },
    },
  },
  args: { activeSection: "" },
};
