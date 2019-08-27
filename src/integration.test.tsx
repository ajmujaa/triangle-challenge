import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { TRIANGLE_TYPES, ERROR_MESSAGES } from "./triangle";

beforeAll(() => {
  (global as any).ts = {
    ui: {
      Notification: {
        success: jest.fn(),
        error: jest.fn()
      }
    }
  }
});

describe("Integration test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  })

  it("should test the flow", async () => {
    const { getByText, getByLabelText } = render(<App />);
    expect(getByText("Side 1")).toBeDefined();
    expect(getByText("Side 2")).toBeDefined();
    expect(getByText("Side 3")).toBeDefined();
    fireEvent.change(getByLabelText("Side 1"), { target: { value: "123" } });
    fireEvent.change(getByLabelText("Side 2"), { target: { value: "123" } });
    fireEvent.change(getByLabelText("Side 3"), { target: { value: "123" } });
    fireEvent.click(getByText("Submit"));
    expect((global as any).ts.ui.Notification.success).toHaveBeenCalledWith(TRIANGLE_TYPES.EQUAL);
    fireEvent.change(getByLabelText("Side 1"), {
      target: { value: "10" }
    });
    fireEvent.change(getByLabelText("Side 2"), {
      target: { value: "10" }
    });
    fireEvent.change(getByLabelText("Side 3"), {
      target: { value: "3" }
    });
    fireEvent.click(getByText("Submit"));
    expect((global as any).ts.ui.Notification.success).toHaveBeenCalledWith(
      TRIANGLE_TYPES.ISOSCELES
    );
    fireEvent.change(getByLabelText("Side 1"), {
      target: { value: "13" }
    });
    fireEvent.change(getByLabelText("Side 2"), {
      target: { value: "14" }
    });
    fireEvent.change(getByLabelText("Side 3"), {
      target: { value: "9" }
    });
    fireEvent.click(getByText("Submit"));
    expect((global as any).ts.ui.Notification.success).toHaveBeenCalledWith(
      TRIANGLE_TYPES.SCALENEA
    );
    fireEvent.change(getByLabelText("Side 1"), {
      target: { value: "0" }
    });
    fireEvent.change(getByLabelText("Side 2"), {
      target: { value: "14" }
    });
    fireEvent.change(getByLabelText("Side 3"), {
      target: { value: "9" }
    });
    fireEvent.click(getByText("Submit"));
    expect((global as any).ts.ui.Notification.error).toHaveBeenCalledWith(
      ERROR_MESSAGES.MISSING_SIDES
    );
    fireEvent.change(getByLabelText("Side 1"), {
      target: { value: "abc" }
    });
    fireEvent.change(getByLabelText("Side 2"), {
      target: { value: "14" }
    });
    fireEvent.change(getByLabelText("Side 3"), {
      target: { value: "9" }
    });
    fireEvent.click(getByText("Submit"));
    expect((global as any).ts.ui.Notification.error).toHaveBeenCalledWith(
      ERROR_MESSAGES.MISSING_SIDES
    );
    fireEvent.click(getByText('Reset'));
    fireEvent.click(getByText('Submit'));
    expect((global as any).ts.ui.Notification.error).toHaveBeenCalledWith(
      ERROR_MESSAGES.MISSING_SIDES
    );
  });
});
