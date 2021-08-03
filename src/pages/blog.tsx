import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MainFeaturedPost from "../components/molecules/MainFeaturedPost/MainFeaturedPost";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

// Example: https://github.com/hupe1980/gatsby-theme-material-ui/blob/master/packages/gatsby-theme-material-ui-top-layout/src/wrap-with-provider.js
// TODO add wrap-with-provider (also see gatsby-browser.js), add helmet
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const BlogPage = ({ data }) => {
  const classes = useStyles();

  return (
    <Layout pageTitle="My Blog Posts">
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          // <FeaturedPost key={post.title} post={post} />
          <div>{post.title}</div>
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        {/* <Main title="From the firehose" posts={posts} /> */}
        <main>
          {data.allMdx.nodes.map((node) => (
            <Card key={node.id}>
              <Typography variant="h4">{node.frontmatter.title}</Typography>
              <Typography>Posted: {node.frontmatter.date}</Typography>
              <MDXRenderer>{node.body}</MDXRenderer>
            </Card>
          ))}
        </main>
        {/* <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        /> */}
      </Grid>
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
