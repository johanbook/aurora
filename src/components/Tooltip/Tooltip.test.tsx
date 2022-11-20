import Tooltip from ".";
import { render, screen } from "../../test";

describe("Tooltip", () => {
  it("works", () => {
    render(
      <Tooltip>
        <span>my-text</span>
      </Tooltip>
    );
    const child = screen.getByText(/my-text/);
    expect(child).toBeInTheDocument();
  });
});
