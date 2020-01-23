import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import HomeHero from "../components/HomeHero"

const getAbout = graphql`
query{
  about:contentfulAbout {
   aboutHero{
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    aboutText
  }
}
`

const About = () => {
  const { about } = useStaticQuery(getAbout)
  const { aboutHero, aboutText } = about
  return (
    <Layout>
      <HomeHero heroImg={aboutHero} heroText={'About'} />
      <div className="blog-item-div">
        <p className="blog-item-description">{aboutText}</p>
      </div>
    </Layout>
  )
}

export default About
