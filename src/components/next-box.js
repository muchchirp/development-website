//next-box.js
import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
} from "./ui"

function NextBox(props) {
  return (
    
    
    <Box center>
      {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="large"
        />
      )}
      <Subhead>{props.heading}</Subhead>
      <Text>{props.text}</Text>
      {/* <LinkList links={props.links} /> */}
    </Box>
  )
}

export default function NextBoxList(props) {
  return (
    <Section>
      <Container>

        <Box center paddingY={4}>
{/*           <Heading>
            {props.heading}
          </Heading> */}
          {props.kicker && <Kicker>{props.kicker}</Kicker>}

        </Box>

{/*         <FlexList gap={4} variant="responsive">
          {props.content.map((nextbox) => (
            <li key={nextbox.id}>
              <NextBox {...nextbox} />
            </li>
          ))}

        </FlexList> */}

        <Box center paddingY={4}>
          {props.text && <Text>{props.text}</Text>}
          </Box>


      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageNextBoxListContent on HomepageNextBoxList {
    id
    kicker
    heading
    text
    content {
      id
      heading
      text
      image {
        alt
        id
        gatsbyImageData
      }

    }
  }
`
