import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";

interface ComponentsListRendererProps {
  items: Rsg.TOCItem[];
}

function checkIfIsChild(href: string): boolean {
  const fragment = href.split("#")[1];
  const isChild = fragment.match(/\//g)?.length >= 2;
  return isChild;
}

function ComponentsListSectionRenderer({
  visibleName,
  href,
  content,
  shouldOpenInNewTab,
  selected,
  initialOpen,
  forcedOpen,
}: Rsg.TOCItem) {
  const [open, setOpen] = React.useState(!!initialOpen);
  const isChild = checkIfIsChild(href);

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

export default function ComponentsListRenderer({
  items,
}: ComponentsListRendererProps) {
  return (
    <List>
      {items.map((item) => (
        <ComponentsListSectionRenderer key={item.slug} {...item} />
      ))}
    </List>
  );
}
