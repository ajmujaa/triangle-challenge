const success = jest.mock(
  (window as any).ts && (window as any).ts.ui.Notification.success
);
const error = jest.mock(
  (window as any).ts && (window as any).ts.ui.Notification.error
);

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { TRIANGLE_TYPES } from "./triangle";

describe("Integration test", () => {
  it("should test the flow", async () => {
    const { getByText, getByLabelText } = render(<App />);
    expect(getByText("Side 1")).toBeDefined();
    expect(getByText("Side 2")).toBeDefined();
    expect(getByText("Side 3")).toBeDefined();
    fireEvent.change(getByLabelText("Side 1"), { target: { value: "123" } });
    fireEvent.change(getByLabelText("Side 2"), { target: { value: "123" } });
    fireEvent.change(getByLabelText("Side 3"), { target: { value: "123" } });
    fireEvent.click(getByText("Submit"));
    expect(error).toBeDefined();
  });
});
