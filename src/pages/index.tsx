import { graphql, PageProps } from "gatsby";
import React from "react";

// @ts-expect-error
import Posts from "gatsby-theme-blog/src/components/posts";

const PostsWrapper = ({ location, data }: any) => {
  const { site, allBlogPost, allFeedGatsbyBlog } = data;

  const bla: typeof allBlogPost.nodes = allFeedGatsbyBlog.nodes.map((p) => ({
    id: p.id!,
    title: p.title!,
    excerpt: p.contentSnippet ?? "",
    slug: p.link ?? "",
    date: p.pubDate!,
    tags: p.categories!,
  }));
  const combinedPosts = [...allBlogPost.nodes, ...bla];

  return (
    <Posts
      location={location}
      posts={combinedPosts}
      siteTitle={site.siteMetadata.title}
      socialLinks={site.siteMetadata.social}
    />
  );
};

// const Foo = () => <div>blogtest</div>;
export default PostsWrapper;

// http://localhost:8000/___graphql
export const query = graphql`
  query BlogPage {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }

    allBlogPost(sort: { fields: [date, title], order: DESC }) {
      nodes {
        id
        excerpt
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }

    allFeedGatsbyBlog {
      nodes {
        title
        pubDate
        link
        contentSnippet
        categories
        id
      }
    }
  }
`;
