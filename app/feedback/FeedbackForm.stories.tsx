import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";
import FeedbackForm from "./FeedbackForm";

const meta: Meta<typeof FeedbackForm> = {
  title: "Components/FeedbackForm",
  component: FeedbackForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `/feedback` page's form. It has four states (idle, submitting, success, error) driven by internal `useState`, not props — the real `/api/feedback` route isn't running inside the Storybook preview server, so the non-idle states below reach them with a play function that stubs `window.fetch` instead. Each of those stories renders in its own isolated iframe (`docs.story.inline: false`) so its fetch stub can't race with another story mounted on the same combined docs page.",
      },
    },
  },
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

export const Default: Story = {};

async function fillMessage(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  await userEvent.type(
    canvas.getByLabelText(/what's on your mind/i),
    "Testing the feedback form from Storybook.",
  );
  return canvas;
}

export const Submitting: Story = {
  parameters: {
    docs: {
      description: {
        story: "Fetch stubbed to never resolve, so the button sticks on its disabled \"Sending…\" label.",
      },
      story: { inline: false },
    },
  },
  play: async ({ canvasElement }) => {
    window.fetch = fn(() => new Promise<Response>(() => {})) as unknown as typeof window.fetch;
    const canvas = await fillMessage(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /send feedback/i }));
    await waitFor(() => expect(canvas.getByRole("button", { name: /sending/i })).toBeDisabled());
  },
};

export const ErrorState: Story = {
  parameters: {
    docs: {
      description: {
        story: "Fetch resolves with `{ ok: false }` — the path taken when server-side validation rejects the submission.",
      },
      story: { inline: false },
    },
  },
  play: async ({ canvasElement }) => {
    window.fetch = fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ok: false, error: "Message is too short. Give me a bit more to go on." }),
      } as Response),
    ) as unknown as typeof window.fetch;
    const canvas = await fillMessage(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /send feedback/i }));
    await waitFor(() => expect(canvas.getByRole("alert")).toBeInTheDocument());
  },
};

export const Success: Story = {
  parameters: {
    docs: {
      description: {
        story: "Fetch resolves with `{ ok: true }` — the form unmounts in favor of the thank-you message.",
      },
      story: { inline: false },
    },
  },
  play: async ({ canvasElement }) => {
    window.fetch = fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ ok: true }) } as Response),
    ) as unknown as typeof window.fetch;
    const canvas = await fillMessage(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /send feedback/i }));
    await waitFor(() => expect(canvas.getByText(/thanks, got it/i)).toBeInTheDocument());
  },
};
