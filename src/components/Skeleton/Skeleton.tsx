import * as React from "react";
import MuiSkeleton, {
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material/Skeleton";

export interface Props extends MuiSkeletonProps {}

/** The skeleton component is for indicating that another component is loading */
export default function Skeleton({ ...props }: Props): React.ReactElement {
  return <MuiSkeleton {...props} />;
}
