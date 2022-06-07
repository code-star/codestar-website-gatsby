import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import Posts from "gatsby-theme-blog/src/components/Posts";

const BlogPage: FC<PageProps<Queries.BlogPageQuery>> = ({
  data,
  location,
}) => {
  console.log(data);
  // const x = data.allFeedGatsbyBlog.edges.map((e) => (
  //   <div key={e.node.id}>{e.node.title}</div>
  // ));
  const { site, allBlogPost, allFeedGatsbyBlog } = data;
  const bla: typeof allBlogPost.nodes = allFeedGatsbyBlog.nodes.map((p) => ({
    id: p.id!,
    title: p.title!,
    excerpt: p.contentSnippet ?? '',
    slug: p.link ?? '',
    date: p.pubDate!,
    tags: p.categories!,
  }));
  const combinedPosts = [...allBlogPost.nodes, ...bla];
  return (
    <div>
      {" "}
      <main>
        <Posts
          location={location}
          posts={combinedPosts}
          siteTitle={site?.siteMetadata?.title}
          socialLinks={site?.siteMetadata?.social}
        />
        {/* <Posts posts={posts} /> */}
      </main>
    </div>
  );
};

// export const query = graphql`
//   query HomePageQuery {
//     site {
//       siteMetadata {
//         description
//       }
//     }
//   }
// `;

// http://localhost:8000/___graphql
export const query = graphql`
  query BlogPage {
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
  }
`;

// export const query = graphql`
//   query TestFeedPage($limit: Int!, $filter: BlogPostFilterInput) {
//     allFeedGatsbyBlog {
//       edges {
//         node {
//           id
//           title
//         }
//       }
//     }

//     site {
//       siteMetadata {
//         title
//         social {
//           name
//           url
//         }
//       }
//     }

//     allBlogPost(
//       sort: { fields: [date, title], order: DESC }
//       filter: $filter
//       limit: $limit
//     ) {
//       nodes {
//         id
//         excerpt
//         slug
//         title
//         date(formatString: "MMMM DD, YYYY")
//         tags
//       }
//     }
//   }
// `;

export default BlogPage;

