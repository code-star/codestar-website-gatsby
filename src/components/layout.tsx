import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import Header from "./molecules/Header/Header";

const sections = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "About", url: "/about" },
  { title: "Learning", url: "#" },
  { title: "Events", url: "#" },
  { title: "Contact", url: "#" },
];

const Layout = ({ children }) => {
  const data = useStaticQuery<{
    site: { siteMetadata: { title: string } };
  }>(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const title = data.site.siteMetadata.title;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={title} sections={sections} />
        {children}
      </Container>
      {/* TODO Get footer from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/blog/Blog.js */}
      {/* <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        /> */}
    </ThemeProvider>
  );
};
export default Layout;
