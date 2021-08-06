import React, { FC } from "react";
import { Toolbar, Typography, Link, AppBar } from "@material-ui/core";
import useStyles from "./Header.styles";
import Section from "../../../types/section";
import { StaticImage } from "gatsby-plugin-image";
import MainMenu from "../../organisms/MainMenu/MainMenu";

// TODO add storybook

interface Props {
  sections: Section[];
  title: string;
}

const Header: FC<Props> = ({ sections, title }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          // align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <StaticImage
            alt={`${title} Logo`}
            src="../../../images/codestar_logo_dark.svg"
          />
        </Typography>
        <MainMenu sections={sections}></MainMenu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
