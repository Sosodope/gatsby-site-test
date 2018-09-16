import React from "react";
import Link from "gatsby-link";
import Card from "../components/Card";
import Cell from "../components/Cell";
import Section from "../components/Section";
import Wave from "../components/Wave";
import siteData from "../../sitedata.json";
import styled from "styled-components";

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`;

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

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

    <SectionCaption>Pricing Plan</SectionCaption>
    <SectionCellGroup>
      {siteData.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
);

export default IndexPage;
