import Select from ".";
import { render, screen, userEvent } from "../../test";

describe("Select", () => {
  it("works", async () => {
    const onChange = jest.fn();
    render(
      <Select onChange={onChange} options={[{ id: "1", label: "my-option" }]} />
    );

    const autocomplete = screen.getByRole("combobox");
    await userEvent.click(autocomplete);

    const options = screen.getByRole("option");
    expect(options).toBeInTheDocument();

    await userEvent.click(options[0]);
    // expect(onChange).toHaveBeenCalledWith("");
  });
});
