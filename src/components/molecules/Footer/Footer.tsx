import React, { FC } from "react";
import { Container, Typography, Link } from "@material-ui/core";
import useStyles from "./Footer.styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://codestar.nl">
        Codestar
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
interface Props {
  title?: string;
}

const Footer: FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title || "codestar@ordina.nl"}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
           +31 30 6637000 {" "}
           Ringwade 1, 3439 LM Nieuwegein
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
};

export default Footer;
