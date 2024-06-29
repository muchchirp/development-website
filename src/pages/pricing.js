import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import StripePricingTable from '../components/StripePricingTable';
import { Space, Container, Section, Box, Text, Heading, Logo } from "../components/ui"



const PricingPage = () => {
  return (
    <Layout>
      <div style={{ paddingTop: '4rem' }}> {/* Adjust the value as needed */}
        <StripePricingTable 
          pricingTableId="prctbl_1Ov13sGUjDHrefXGXkNkHWVF" 
          publishableKey="pk_live_51NAZ7SGUjDHrefXG5nHfp0EVIH1dB97WWDcpV91pulpqHNDApXhuetGWN30K1GKpDtKUHnBV64qziv1RZOuoFweU00VqnUVTei" 
        />
      </div>
    </Layout>
  );
};


export default PricingPage;
