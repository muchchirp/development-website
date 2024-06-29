import * as React from "react"
import { graphql } from "gatsby"
import { Space, Container, Section, ButtonList, Text, Heading, Logo } from "./ui"

const downloadAllLink = {
  text: 'Download All',
  href: '/downloads/all', // The URL where all items can be downloaded
  // Add other link attributes as needed
};

export default function DownloadList(props) {
  console.log(props); // This line will log the props to the console

  return (
    <Section id="downloads">
      <Container width="narrow">
        {props.heading && (
          <Heading as="h1" center variant="heading">
            {props.heading}
          </Heading>
        )}
        {props.kicker && (
          <Text center variant="text" style={{ marginTop: '0.5rem' }}>
            {props.kicker}
          </Text>
        )}
        <Space size={4} />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {props.downloads.map((download) => (
            <div key={download.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%', margin: '1.1rem' }}>
              {download.href ? (
                <a href={download.href}>
                  <Logo alt={download.alt} image={download.image.gatsbyImageData} size="medium" />
                </a>
              ) : (
                <Logo alt={download.alt} image={download.image.gatsbyImageData} size="medium" />
              )}
              {download.href ? (
                <a href={download.href}>
                  <Text style={{ alignSelf: 'flex-end', marginTop: 'auto' }}>{download.text}</Text>
                </a>
              ) : (
                <Text style={{ alignSelf: 'flex-end', marginTop: 'auto' }}>{download.text}</Text>
              )}
            </div>
          ))}
          <ButtonList links={[downloadAllLink]} />
        </div>
      </Container>
    </Section>
  );
}

export const query = graphql`
  fragment HomepageDownloadListContent on HomepageDownloadList {
    id
    text
    heading
    subhead
    kicker
    downloads {
      id
      alt
      text
      href
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
