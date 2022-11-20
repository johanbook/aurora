import * as React from "react";
import MuiSkeleton, { Props as MuiSkeletonProps } from "@mui/material/Skeleton";

export interface Props extends MuiSkeletonProps {}

/** The skeleton component is for indicating that another component is loading */
export default function Skeleton({
  children,
  ...props
}: Props): React.ReactElement {
  return <MuiSkeleton {...props} />;
}
