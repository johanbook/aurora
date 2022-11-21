import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

/** The spinner component is for indicating that another component is loading */
export default function Spinner({ ...props }): React.ReactElement {
  return <CircularProgress {...props} />;
}
