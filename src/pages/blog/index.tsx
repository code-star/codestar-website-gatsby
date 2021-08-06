import React, { FC } from "react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";
import MainFeaturedPost from "../../components/molecules/MainFeaturedPost/MainFeaturedPost";
import FeaturedPost from "../../components/molecules/FeaturedPost/FeaturedPost";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[600],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const BlogPage: FC = () => {
  const classes = useStyles();

  // TODO generate types from queries
  // Please note that you can use https://github.com/dotansimha/graphql-code-generator
  // to generate all types from graphQL schema
  const data = useStaticQuery<{
    allMdx: {
      nodes: {
        frontmatter: { date: string; title: string };
        id: string;
        excerpt: string;
        slug: string;
      }[];
    };
  }>(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          excerpt(truncate: true)
          slug
        }
      }
    }
  `);

  const processedPosts = data.allMdx.nodes.map((node) => ({
    ...node,
    date: node.frontmatter.date,
    title: node.frontmatter.title.substr(0, 30),
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    // image: "https://source.unsplash.com/random",
    image: "https://images.unsplash.com/photo-1626422748187-18b829d019e2",
    imageText: "main image description",
    linkText: "Continue reading…",
  }));

  const mainFeaturedPost = processedPosts[0];
  const featuredPosts = processedPosts.slice(1, 3);
  const olderPosts = processedPosts.slice(3);

  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
          // <div key={post.id}>{post.title}</div>
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        {/* <Main title="From the firehose" posts={posts} /> */}

        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            More articles
          </Typography>
          <Divider />
          {olderPosts.map((node) => (
            <div key={node.id} style={{ marginTop: "2rem" }}>
              <Typography variant="h4">{node.title}</Typography>
              <Typography>{node.date} by ...</Typography>
              <div>{node.excerpt}</div>
              <Link
                variant="subtitle1"
                component={GatsbyLink}
                to={`/blog/${node.slug}`}
              >
                {node.linkText}
              </Link>
            </div>
          ))}
        </Grid>

        {/* <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        /> */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography>description</Typography>
          </Paper>
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Archives
          </Typography>
          {/* {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))} */}
          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Social
          </Typography>
          {/* {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))} */}
        </Grid>
      </Grid>
    </>
  );
};

export default BlogPage;
