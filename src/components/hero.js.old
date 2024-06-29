//hero.js
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Text,
  Subhead,
  whiteBox,
  boxWidths
} from "./ui"



export default function Hero(props) {
  console.log(props); // This line will log the props to the console
  const imageAlt = props.image?.alt ? props.image.alt : '';
  const backgroundImg = getImage(props.background.gatsbyImageData);
  const { bsubhead, btext, bcontent } = props;

  // Adding background image style
  const sectionStyle = backgroundImg ? {
    backgroundImage: `url(${backgroundImg.images.fallback.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  } : {};

  return (
    // Apply the background style to this Section
    <Section style={sectionStyle}>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            {props.image && (
              <GatsbyImage
                alt={imageAlt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.h1}
            </Heading>
            <Text as="p">{props.text}</Text>
            <ButtonList links={props.links} />
          </Box>
        </Flex>

        {/* New Section for bcontent these are the 3 gift boxes*/}
        <Section>
          <Kicker style={{ paddingBottom: '20px' }}>{bsubhead}</Kicker>
            <Flex gap={4}  variant="responsive">
              {bcontent.map((item, index) => (
                <Box key={index} style={{  backgroundColor: '#F5F8FE', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', }} className={whiteBox}>
                  {item.image && item.image.gatsbyImageData && (
                    <GatsbyImage
                      image={getImage(item.image.gatsbyImageData)}
                      alt={item.text}
                      style={{ height: '24px', width: '24px' }}
                    />
                  )}
                  <Text>{item.text}</Text>
                </Box>
              ))}
            </Flex>

          <Text center as="p" style={{ paddingTop: '20px' }}>{btext}</Text>
        </Section>




      </Container>
    </Section>
  );
}


export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    ... on SanityHomepageHero {
      bcontent {
        image {
          gatsbyImageData
        }
        text
      }
      bsubhead
      btext
    }
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
    background {
      id
      gatsbyImageData
      alt
    }
  
    
  }
`
