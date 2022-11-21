import React from "react";
import cx from "clsx";
import Heading from "rsg-components/Heading";
import Styled, { JssInjectedProps } from "rsg-components/Styled";
import * as Rsg from "../../../typings";

const styles = ({ color, space }: Rsg.Theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: space[1],
  },
  toolbar: {
    marginLeft: "auto",
  },
  sectionName: {
    "&:hover, &:active": {
      isolate: false,
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
  isDeprecated: {
    color: color.light,
    "&, &:hover": {
      textDecoration: "line-through",
    },
  },
});

interface SectionHeadingRendererProps extends JssInjectedProps {
  children?: React.ReactNode;
  id: string;
  href?: string;
  depth: number;
  deprecated?: boolean;
}

const SectionHeadingRenderer: React.FunctionComponent<
  SectionHeadingRendererProps
> = ({ classes, children, id, href, depth, deprecated }) => {
  const headingLevel = Math.min(6, depth);
  const sectionNameClasses = cx(classes.sectionName, {
    [classes.isDeprecated]: deprecated,
  });

  if (children === "Home") {
    return <React.Fragment> </React.Fragment>;
  }

  return (
    <div className={classes.wrapper}>
      <Heading level={headingLevel} id={id}>
        <a href={href} className={sectionNameClasses}>
          {children}
        </a>
      </Heading>
    </div>
  );
};

export default Styled<SectionHeadingRendererProps>(styles)(
  SectionHeadingRenderer
);
