import TextField from ".";
import { render, screen, userEvent } from "../../test";

describe("TextField", () => {
  it("works", async () => {
    const onChange = jest.fn();
    render(<TextField onChange={onChange} />);

    const textfield = screen.getByRole("textbox");
    await userEvent.type(textfield, "my-text", { delay: 1 });
    expect(onChange).toHaveBeenCalled();
  });
});
