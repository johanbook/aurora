import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import Link from "rsg-components/Link";
import Styled, { JssInjectedProps } from "rsg-components/Styled";
import { useStyleGuideContext } from "rsg-components/Context";
import * as Rsg from "../../../typings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";

interface ComponentsListRendererProps extends JssInjectedProps {
  items: Rsg.TOCItem[];
}

function ComponentsListSectionRenderer({
  classes,
  heading,
  visibleName,
  href,
  content,
  shouldOpenInNewTab,
  selected,
  initialOpen,
  forcedOpen,
}) {
  const {
    config: { tocMode },
  } = useStyleGuideContext();

  const [open, setOpen] =
    tocMode !== "collapse" ? [true, () => {}] : React.useState(!!initialOpen);

  // This is quite hacky. Href wil show as `/#/page/subpage`
  const isChild = (href as string).match(/\//g)?.length >= 3;

  if (content) {
    return (
      <React.Fragment>
        <ListItemButton
          key={href}
          onClick={() => setOpen(!open)}
          selected={selected}
          sx={{ py: 0 }}
        >
          <ListItemText primary={visibleName} />

          <ListItemIcon>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemIcon>
        </ListItemButton>
        <Collapse in={open || forcedOpen}>{content}</Collapse>
      </React.Fragment>
    );
  }

  return (
    <ListItemButton
      component="a"
      key={href}
      href={href}
      selected={selected}
      sx={{ py: 0, ml: isChild ? 2 : 0 }}
      target={shouldOpenInNewTab ? "_blank" : undefined}
    >
      <ListItemText primary={visibleName} />
    </ListItemButton>
  );
}

export default function ComponentsListRenderer({ items }) {
  return (
    <List>
      {items.map((item) => (
        <ComponentsListSectionRenderer key={item.slug} {...item} />
      ))}
    </List>
  );
}
