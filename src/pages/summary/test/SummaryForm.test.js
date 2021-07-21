import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from '@testing-library/user-event';

describe("Testing checkbox and confirm button", () => {
  test("Checkbox is unchecked by default and button is disabled", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  test("Checkbox enables and disables confirm button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", {
      name: /confirm order/i,
    });

    userEvent.click(checkbox);
    expect(checkbox).toBeChecked()
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked()
    expect(confirmButton).toBeDisabled();
  });
});
