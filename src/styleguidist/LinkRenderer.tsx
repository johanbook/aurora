import React from "react";
import ListItemText from "@mui/material/ListItemText";

export interface LinkRendererProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export default function LinkRenderer({
  children,
  ...props
}: LinkRendererProps) {
  return <ListItemText primary={children} {...props} />;
}
