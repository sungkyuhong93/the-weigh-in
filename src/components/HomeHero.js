import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "../css/hero.css"
import Hamburger from "./Hamburger"

const HomeHero = props => {
  return (
    <div className="hero">
      <BackgroundImage className="hero-img" fluid={props.heroImg.fluid}>
        <div className="hero-title">
          <h1>{props.heroText}</h1>
        </div>
      </BackgroundImage>

      <Hamburger />
    </div>
  )
}

export default HomeHero
