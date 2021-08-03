import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MainFeaturedPost from "../components/molecules/MainFeaturedPost/MainFeaturedPost";
import FeaturedPost from "../components/molecules/FeaturedPost/FeaturedPost";

// Example: https://github.com/hupe1980/gatsby-theme-material-ui/blob/master/packages/gatsby-theme-material-ui-top-layout/src/wrap-with-provider.js
// TODO add wrap-with-provider (also see gatsby-browser.js), add helmet
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const BlogPage = ({ data }) => {
  const classes = useStyles();

  const processedPosts = data.allMdx.nodes.map((node) => ({
    id: node.id,
    title: node.frontmatter.title.substr(0, 30),
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    // image: "https://source.unsplash.com/random",
    image: "https://images.unsplash.com/photo-1626422748187-18b829d019e2",
    imgText: "main image description",
    linkText: "Continue reading…",
  }));

  const mainFeaturedPost = processedPosts[0];
  const featuredPosts = processedPosts.slice(1,3);

  return (
    <Layout pageTitle="My Blog Posts">
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
          // <div key={post.id}>{post.title}</div>
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
