import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { CssBaseline, Typography } from "@material-ui/core";
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";

const Layout = ({ pageTitle, children, theme }) => {
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
    <ThemeTopLayout theme={theme}>
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
    </ThemeTopLayout>
  );
};
export default Layout;
