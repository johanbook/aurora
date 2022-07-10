import * as React from "react";
import MuiTextField, {
  Props as MuiTextFieldProps,
} from "@mui/material/TextField";

export interface Props extends MuiTextFieldProps {}

/** The text field component is for entering textual data (not rich text)*/
export default function TextField({ ...props }: Props): React.ReactElement {
  return <MuiTextField fullWidth={true} variant="outlined" {...props} />;
}
