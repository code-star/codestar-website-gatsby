import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import Posts from "gatsby-theme-blog/src/components/Posts";

const TestFeedPage: FC<PageProps<Queries.TestFeedPageQuery>> = ({
  data,
  location,
}) => {
  console.log(data);
  const x = data.allFeedGatsbyBlog.edges.map((e) => (
    <div key={e.node.id}>{e.node.title}</div>
  ));
  const { site, allBlogPost } = data;
  return (
    <div>
      {" "}
      {x}
      <main>
        <Posts
          location={location}
          posts={allBlogPost.nodes}
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
  query TestFeedPage {
    allFeedGatsbyBlog {
      edges {
        node {
          id
          title
        }
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

export default TestFeedPage;
