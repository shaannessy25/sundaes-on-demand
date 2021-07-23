import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

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
    expect(checkbox).toBeChecked();
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  //popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears upon mouseover
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
  //   const nullPopoverAgain = screen.queryByText(/no ice cream will actually be delivered/i)
  //   expect(nullPopoverAgain).not.toBeInTheDocument()
});
