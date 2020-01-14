import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import HomeHero from "../components/HomeHero"

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { heroImg, heroText } = data.allContentfulHeroImg.edges[0].node
  return (
    <Layout>
      <HomeHero heroImg={heroImg} heroText={heroText} />
      <SEO title="Home" />
      <div className="blogs-div">
        {data.allContentfulBlogPost.edges.map(({ node: blogpost }) => {
          return (
            <div className="blog-post">
              <div classNme="blog-post-content">
                <div className="blog-post-img">
                  <Link to={`/blogs/${blogpost.slug}`}>
                    <Img fluid={blogpost.blogImage.fluid} />
                  </Link>
                </div>
                <div className="blog-post-link-wrap">
                  <Link
                    className="blog-post-link"
                    to={`/blogs/${blogpost.slug}`}
                  >
                    {" "}
                    {blogpost.blogTitle}
                  </Link>
                </div>
                <span className="blog-post-category">
                  {blogpost.blogCategory}
                </span>
                <p className="blog-post-excerpt">{blogpost.blogExcerpt}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulHeroImg {
      edges {
        node {
          heroImg {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          heroText
        }
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          blogTitle
          blogCategory
          slug
          blogImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          blogExcerpt
        }
      }
    }
  }
`

export default IndexPage
