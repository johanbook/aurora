import Typography from ".";
import { render, screen } from "../../test";

describe("Typography", () => {
  it("works", () => {
    render(<Typography>my-text</Typography>);
    const text = screen.getByText(/my-text/);
    expect(text).toBeInTheDocument();
  });
});
