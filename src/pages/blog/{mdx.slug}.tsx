import { Typography } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { FC } from "react";
import { graphql } from "gatsby";

interface Props {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
      },
      body: string;
    }
  };
}

const BlogPost: FC<Props> = ({ data }) => {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        {data.mdx.frontmatter.title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {data.mdx.frontmatter.date}
      </Typography>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
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
