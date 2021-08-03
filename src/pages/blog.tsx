import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Card, Typography } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <Card key={node.id}>
          <Typography variant="h4">{node.frontmatter.title}</Typography>
          <Typography>Posted: {node.frontmatter.date}</Typography>
          <MDXRenderer>{node.body}</MDXRenderer>
        </Card>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
