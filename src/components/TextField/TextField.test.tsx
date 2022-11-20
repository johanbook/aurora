import TextField from ".";
import { render, screen, userEvent } from "../../test";

describe("TextField", () => {
  it("works", () => {
    console.log({ userEvent });
    render(<TextField />);
    userEvent.type(screen.getByRole("input"), "my-text");
  });
});
