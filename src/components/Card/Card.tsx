import * as React from "react";
import MuiCard, { CardProps as MuiCardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export interface Props extends MuiCardProps {}

/** The card component is for displaying grouped rich content */
export default function Card({
  children,
  ...props
}: Props): React.ReactElement {
  return (
    <MuiCard variant="outlined" {...props}>
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
}
