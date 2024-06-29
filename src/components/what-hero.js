import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading } from "./ui"
import * as styles from "./what-hero.css"

export default function WhatHero(props) {

  const imageAlt = props.image?.alt ? props.image.alt : '';

  return (
    <Section>
      <Container>
        <SuperHeading className={styles.whatHeroHeader}>
          {props.heading}
        </SuperHeading>
        {props.text && (
          <Text className={styles.whatHeroText}>{props.text}</Text>
        )}
      </Container>



      <Container width="wide">
        {props.image && (
          <GatsbyImage
          alt={imageAlt}
          image={getImage(props.image.gatsbyImageData)}
            className={styles.whatHeroImage}
          />
        )}
      </Container>
    </Section>
  )
}





export const query = graphql`
  fragment WhatHeroContent on WhatHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
