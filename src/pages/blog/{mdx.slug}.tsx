import { Typography } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { FC } from "react";
import { graphql } from "gatsby";
import { GetArticleQuery } from "../../types/graphqlTypes";

interface Props {
  data: GetArticleQuery;
}

const BlogPost: FC<Props> = ({ data }) => (
  <>
    <Typography variant="h2" gutterBottom>
      {data?.mdx?.frontmatter?.title}
    </Typography>
    <Typography variant="body2" gutterBottom>
      {data?.mdx?.frontmatter?.date}
    </Typography>
    <MDXRenderer>{data?.mdx?.body ?? ""}</MDXRenderer>
  </>
);

export const query = graphql`
  query getArticle($id: String) {
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
