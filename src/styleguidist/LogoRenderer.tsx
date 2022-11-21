import React from "react";

import Typography from "../components/Typography";

interface LogoRendererProps {
  children: React.ReactNode;
}

export default function LogoRenderer({ children }: LogoRendererProps) {
  return (
    <Typography component="h1" variant="h5">
      {children}
    </Typography>
  );
}
