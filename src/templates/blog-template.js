import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomeHero from "../components/HomeHero"


const BlogTemplate = ({ data }) => {
  const {
    blogTitle,
    blogCategory,
    blogDescription: { blogDescription },
    blogImage,
  } = data.blog
  return (
    <Layout>
      <HomeHero heroImg={blogImage} heroText={blogTitle} />
      <div className="blog-item-div">
        <p className="blog-item-description">{blogDescription}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      blogTitle
      blogCategory
      blogDescription {
        blogDescription
      }
      blogImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default BlogTemplate
