import { Typography } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { FC } from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

interface Props {
  data: any;
}

const BlogPost: FC<Props> = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Typography variant="h2" gutterBottom>
        {data.mdx.frontmatter.title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {data.mdx.frontmatter.date}
      </Typography>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
