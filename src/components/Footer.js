import React from "react";
import styled from "styled-components";

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`;

const FooterText = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`;

const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);

  a {
    transition: all 0.8s;
  }

  a:hover {
    color: black;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const Button = styled.button`
  background: linear-gradient(109.57deg, #f9d507 0%, #f32134 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600px;
  font-size: 24px;
  justify-self: center;
  outline: none;
  transition: all 0.8s ease-out;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  color: #487961;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Footer = ({ data, children }) => {
  return (
    <FooterGroup>
      <FooterText>Follow us for more</FooterText>
      <Button>Tweet</Button>
      <LinkGroup>
        {data.allContentfulLink.edges.map(edge => (
          <a href={edge.node.url}>{edge.node.title}</a>
        ))}
      </LinkGroup>
      <Copyright>{children}</Copyright>
    </FooterGroup>
  );
};

export default Footer;
