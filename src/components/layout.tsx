import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "../theme";
import Header from "./molecules/Header/Header";
import Section from "../types/section";
import Footer from "./molecules/Footer/Footer";

const sections: Section[] = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "About", url: "/about" },
  { title: "Learning", url: "/learning" },
  { title: "Events", url: "/events" },
  { title: "Contact", url: "https://www.ordina.nl/vakgebieden/scala/" },
];

const Layout = ({ children }) => {
  const data = useStaticQuery<{
    site: { siteMetadata: { title: string } };
  }>(
    // Note: making this query named (e.g. `query getSite (`), breaks the develop build
    graphql`
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
      <Footer />
    </ThemeProvider>
  );
};
export default Layout;
