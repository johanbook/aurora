import React from "react";
import Styled, { JssInjectedProps } from "rsg-components/Styled";
import cx from "clsx";
import * as Rsg from "../../../typings";
import Drawer from "@mui/material/Drawer";
import Logo from "./LogoRenderer";

const styles = ({
  color,
  fontFamily,
  fontSize,
  sidebarWidth,
  mq,
  space,
  maxWidth,
}: Rsg.Theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: color.baseBackground,
  },
  hasSidebar: {
    paddingLeft: sidebarWidth,
    [mq.small]: {
      paddingLeft: 0,
    },
  },
  content: {
    maxWidth,
    padding: [[space[2], space[4]]],
    margin: [[0, "auto"]],
    [mq.small]: {
      padding: space[2],
    },
    display: "block",
  },
  sidebar: {
    backgroundColor: color.sidebarBackground,
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    [mq.small]: {
      position: "static",
      width: "auto",
      borderWidth: [[1, 0, 0, 0]],
      paddingBottom: space[0],
    },
  },
  logo: {
    padding: space[2],
    borderBottom: [[1, color.border, "solid"]],
  },
  footer: {
    display: "block",
    color: color.light,
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
  },
});

interface StyleGuideRendererProps extends JssInjectedProps {
  title: string;
  version?: string;
  homepageUrl: string;
  children: React.ReactNode;
  toc?: React.ReactNode;
  hasSidebar?: boolean;
}

export const StyleGuideRenderer: React.FunctionComponent<
  StyleGuideRendererProps
> = ({ classes, title, children, toc, hasSidebar }) => {
  return (
    <div className={cx(classes.root, hasSidebar && classes.hasSidebar)}>
      <main className={classes.content}>
        {children}
        <footer className={classes.footer}></footer>
      </main>
      {hasSidebar && (
        <Drawer anchor="left" open={true} variant="permanent">
          <header className={classes.logo}>
            <Logo>{title}</Logo>
          </header>
          {toc}
        </Drawer>
      )}
    </div>
  );
};

export default Styled<StyleGuideRendererProps>(styles)(StyleGuideRenderer);
