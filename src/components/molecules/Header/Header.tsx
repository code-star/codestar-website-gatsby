import React, { FC } from "react";
import { Toolbar, Typography, Link } from "@material-ui/core";
import useStyles from "./Header.styles";
import Section from "../../../types/section";

// TODO add storybook

interface Props {
  sections: Section[];
  title: string;
}

const Header: FC<Props> = ({ sections, title }) => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
};

export default Header;
