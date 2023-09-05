import { render, screen, fireEvent, waitFor } from "@testing-library/preact";
import "@testing-library/jest-dom";
import { html } from "htm/preact";
import { AacKey } from "./AacKey";

test("The AAC key is rendered with proper functions", async () => {
  render(html`
    <${AacKey}
      id=${"uuid-1"}
      label=${"he wants"}
      backgroundColor=${"green"}
      rowStart=${3}
      rowSpan=${2}
      columnStart=${2}
      columnSpan=${1}
  />`);

  const button = await screen.findByRole("button");

  // make sure the button is rendered with proper attributes and text
  expect(button).toBeVisible();
  expect(button).toBeValid();
  expect(button.id).toBe("uuid-1");
  expect(button.style["background-color"]).toBe("green");
  expect(button.style["grid-column"]).toBe("2 / span 1");
  expect(button.style["grid-row"]).toBe("3 / span 2");
  expect(button.textContent).toBe("he wants");

  // make sure the onClick listener is binded correctly
  // use mock function to simulate window.alert that is not implemented in the testing environment
  window.alert = jest.fn();
  fireEvent.click(button);
  await waitFor(() => {
    expect((window.alert as jest.MockedFunction<typeof window.alert>).mock.calls).toHaveLength(1);
  });
});
