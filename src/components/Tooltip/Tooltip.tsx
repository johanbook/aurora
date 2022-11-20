import * as React from "react";
import MuiTooltip, { Props as MuiTooltipProps } from "@mui/material/Tooltip";

export interface Props extends MuiTooltipProps {}

/** The tooltip component is for showing additional information about another component */
export default function Tooltip({ ...props }: Props): React.ReactElement {
  return <MuiTooltip {...props} />;
}
