import React from "react";
import Link from "gatsby-link";
import Card from "../components/card";
import Section from "../components/Section";
import Wave from "../components/Wave";

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="Hero-group">
        <h1 className="Hero-title">Hi people</h1>
        <p className="Hero-subtitle">Welcome to your new Gatsby site.</p>
        <p className="Hero-subtitle">Now go build something great.</p>
        <Link to="/page-2/" className="Hero-btn">
          Learn more
        </Link>
        <Wave />
        <div className="Logos">
          <img src={require("../images/logo-sketch.png")} width="50" />
          <img src={require("../images/logo-figma.png")} width="50" />
          <img src={require("../images/logo-studio.png")} width="50" />
          <img src={require("../images/logo-framer.png")} width="50" />
          <img src={require("../images/logo-react.png")} width="50" />
          <img src={require("../images/logo-swift.png")} width="50" />
        </div>
      </div>
      <div className="CardGroup">
        <Card
          title="Service #1"
          text="10 past projects"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="Service #2"
          text="11 past projects"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Service #3"
          text="5 past projects"
          image={require("../images/wallpaper3.jpg")}
        />
      </div>
    </div>

    <Section
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-cactus.svg")}
      title="About Us"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate esse enim necessitatibus. Unde, optio facere porro perspiciatis rerum nesciunt molestiae, veritatis modi ipsum dolor alias debitis, deserunt reiciendis minus nulla!"
    />
  </div>
);

export default IndexPage;
