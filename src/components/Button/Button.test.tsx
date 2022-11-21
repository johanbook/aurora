import Button from ".";
import { render, screen, userEvent } from "../../test";

describe("Button", () => {
  it("renders", () => {
    render(<Button>my-text</Button>);

    const text = screen.getByText(/my-text/);
    expect(text).toBeInTheDocument();
  });

  it("can be clicked", async () => {
    const onChange = jest.fn();
    render(<Button onClick={onChange}>my-text</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
