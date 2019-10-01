import React, { Component } from "react"
import { Link } from "gatsby"

export default class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addClass: false,
    }
  }

  handleClick = () => {
    this.setState({ addClass: !this.state.addClass })
  }

  render() {
    let activeClass = this.state.addClass ? "active" : "not-active"
    return (
      <React.Fragment>
        <div className="home-link">
          <Link>The Weigh In</Link>
        </div>

        <div
          className={`acetrnt-toggle ${activeClass}`}
          onClick={this.handleClick}
        >
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>

        <div className={`hamburger-ul-div ${activeClass}`}>
          <ul className="hamburger-ul">
            <li className="hamburger-li">
              <a target="_blank" href="https://www.instagram.com/the_weighin/">
                Follow
              </a>
            </li>
            <li className="hamburger-li">
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}
