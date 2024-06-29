import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function What(props) {
  const { whatPage } = props.data

  return (
    <Layout>
      {whatPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}
export const Head = (props) => {
  const { whatPage } = props.data
  return <SEOHead {...whatPage} />
}
export const query = graphql`
  {
    whatPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...WhatHeroContent
        ...WhatStatListContent
        ...HomepageProductListContent
        ...WhatLeadershipContent
        ...HomepageBenefitListContent
        ...WhatLogoListContent
        ...HomepageCtaContent
      }
    }
  }
`
