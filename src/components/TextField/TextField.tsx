import * as React from "react";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material/TextField";

export interface Props extends MuiTextFieldProps {
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** The text field component is for entering textual data (not rich text)*/
export default function TextField({
  onChange,
  ...props
}: Props): React.ReactElement {
  return (
    <MuiTextField
      fullWidth={true}
      onChange={(event) => onChange(event.target.value, event)}
      variant="outlined"
      {...props}
    />
  );
}
