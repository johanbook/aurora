import * as React from "react";
import MuiTypography, {
  Props as MuiTypographyProps,
} from "@mui/material/Typography";

export interface Props extends MuiTypographyProps {}

/** The typography component is for showing textual content*/
export default function Typography({ ...props }: Props): React.ReactElement {
  return <MuiTypography {...props} />;
}
