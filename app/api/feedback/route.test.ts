/**
 * @jest-environment node
 */
// Route handlers use the Web Request/Response APIs, which Node provides
// natively but jsdom (this project's default test environment) doesn't.

const sendMock = jest.fn();

jest.mock("resend", () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: { send: sendMock },
  })),
}));

import { POST } from "./route";

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/feedback", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

const OLD_ENV = process.env;

beforeEach(() => {
  jest.clearAllMocks();
  process.env = { ...OLD_ENV, RESEND_API_KEY: "test-key" };
  sendMock.mockResolvedValue({ data: { id: "email-id" }, error: null });
});

afterAll(() => {
  process.env = OLD_ENV;
});

describe("POST /api/feedback", () => {
  it("rejects a missing message", async () => {
    const res = await POST(makeRequest({ name: "Alex" }));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.ok).toBe(false);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects a too-short message", async () => {
    const res = await POST(makeRequest({ message: "hi" }));
    expect(res.status).toBe(400);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("rejects an invalid email", async () => {
    const res = await POST(makeRequest({ message: "This is real feedback.", email: "not-an-email" }));
    expect(res.status).toBe(400);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("silently succeeds without sending when the honeypot is filled", async () => {
    const res = await POST(makeRequest({ message: "This is real feedback.", company: "Acme" }));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.ok).toBe(true);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("sends the email and reports success for valid feedback", async () => {
    const res = await POST(
      makeRequest({ name: "Alex", email: "alex@example.com", message: "The header is too tall on mobile." })
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.ok).toBe(true);

    expect(sendMock).toHaveBeenCalledTimes(1);
    const call = sendMock.mock.calls[0][0];
    expect(call.to).toBe("darrough@gmail.com");
    expect(call.replyTo).toBe("alex@example.com");
    expect(call.subject).toContain("Alex");
    expect(call.text).toContain("The header is too tall on mobile.");
  });

  it("returns 502 when Resend reports an error", async () => {
    sendMock.mockResolvedValue({ data: null, error: { message: "bad request" } });
    const res = await POST(makeRequest({ message: "Feedback that fails to send." }));
    expect(res.status).toBe(502);
    const json = await res.json();
    expect(json.ok).toBe(false);
  });

  it("returns 500 with a clear error when RESEND_API_KEY is missing", async () => {
    delete process.env.RESEND_API_KEY;
    const res = await POST(makeRequest({ message: "Feedback with no API key configured." }));
    expect(res.status).toBe(500);
    expect(sendMock).not.toHaveBeenCalled();
  });
});
