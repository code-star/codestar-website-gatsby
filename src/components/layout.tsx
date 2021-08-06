import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import Header from "./molecules/Header/Header";

interface LayoutProps {
  pageTitle: string;
}

const sections = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "About", url: "/about" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const title = `${pageTitle} | ${data.site.siteMetadata.title}`;

  return (
    <>
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
    </>
  );
};
export default Layout;
