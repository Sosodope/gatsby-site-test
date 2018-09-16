import React from "react";
import Link from "gatsby-link";
import logo from "../images/logo-cactus.svg";
import "./header.css";

class Header extends React.Component {
  state = {
    hasScrolled: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };
  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img width="50" src={logo} />
          </Link>
          <Link to="/courses">About Us</Link>
          <Link to="/downloads">Services</Link>
          <Link to="/workshops">Pricing</Link>
          <Link to="/buy">
            <button className="Header-btn">Contact</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
