import * as React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface Props extends MuiButtonProps {}

/** Buttons are components for triggering events */
export default function Button({ ...props }: Props): React.ReactElement {
  return <MuiButton {...props} />;
}
