import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { CssBaseline, ThemeProvider, Typography } from "@material-ui/core";
import theme from "../theme";

// Example: https://github.com/hupe1980/gatsby-theme-material-ui/blob/master/packages/gatsby-theme-material-ui-top-layout/src/wrap-with-provider.js
// TODO add wrap-with-provider (also see gatsby-browser.js), add helmet

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography variant="h3">
          {pageTitle} | {data.site.siteMetadata.title}
        </Typography>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </ThemeProvider>
    </>
  );
};
export default Layout;
