import Autocomplete from ".";
import { render, screen, userEvent } from "../../test";

describe("Autocomplete", () => {
  it("works", async () => {
    const onChange = jest.fn();
    render(
      <Autocomplete
        onChange={onChange}
        options={[{ id: "1", label: "my-option" }]}
      />
    );

    const autocomplete = screen.getByRole("combobox");
    await userEvent.click(autocomplete);
  });
});
