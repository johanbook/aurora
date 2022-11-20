import Card from ".";
import { render, screen } from "../../test";

describe("Card", () => {
  it("works", () => {
    render(<Card>my-text</Card>);
    const component = screen.getByText(/my-text/);
    expect(component).toBeInTheDocument();
  });
});
