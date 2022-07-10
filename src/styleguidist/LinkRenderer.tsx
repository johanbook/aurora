import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Styled, { JssInjectedProps } from "rsg-components/Styled";
import * as Rsg from "../../../typings";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface LinkProps extends JssInjectedProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export default function LinkRenderer({ children, ...props }) {
  return <ListItemText primary={children} />;
}
