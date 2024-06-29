import * as React from "react";
import { graphql } from "gatsby";
import { Space, Container, Section, FlexList, Text, Logo } from "./ui";
import "./logo-list.css"; // Import the CSS file

export function LogoItem(props) {
  if (!props.image) return null;

  return (
    <Logo alt={props.alt} image={props.image.gatsbyImageData} size="medium" />
  );
}

export default function LogoList(props) {
  return (
    <Section className="logo-list-section" paddingY={0}>
      <Container width="narrow">
        {props.text && (
          <Text center variant="lead">
            {props.text}
          </Text>
        )}
        <Space size={4} />
        <FlexList gap={4} variant="center">
          {props.logos.map(
            (logo) =>
              logo && (
                <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              )
          )}
        </FlexList>
      </Container>
    </Section>
  );
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`;
