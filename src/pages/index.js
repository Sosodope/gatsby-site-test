import React from "react";
import Link from "gatsby-link";

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
      </div>
    </div>
  </div>
);

export default IndexPage;
