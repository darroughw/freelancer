import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FeedbackForm from "./FeedbackForm";

const meta: Meta<typeof FeedbackForm> = {
  title: "Components/FeedbackForm",
  component: FeedbackForm,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FeedbackForm>;

// Idle state only — submitting posts to /api/feedback, which isn't running
// inside the Storybook preview server.
export const Default: Story = {};
