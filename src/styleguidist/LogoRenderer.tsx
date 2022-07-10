import React from "react";
import Styled, { JssInjectedProps } from "rsg-components/Styled";
import * as Rsg from "../../../typings";

import Typography from "../components/Typography";

export default function LogoRenderer({ children }) {
  return (
    <Typography component="h1" variant="h5">
      {children}
    </Typography>
  );
}
