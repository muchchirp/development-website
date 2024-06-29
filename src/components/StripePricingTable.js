import React, { useEffect } from 'react';
import { Container, Section } from "./ui";


const PricingTable = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Section style={{ paddingTop: '4rem', paddingBottom: '1rem' }}>
        {/* This section now has padding applied to it */}
        <stripe-pricing-table
          pricing-table-id="prctbl_1P8S8pGwGUbg9zV0gU1k6QPT"
          publishable-key="pk_live_51P8Pu0GwGUbg9zV0o5bVTTJ3ukh8wrGSjmk5HSu9pMMAYcrYKj1ZJ4HtvpXPdU0CX4hwSH8JKbyFUlkub7dslnwO00ClswCDug"
        ></stripe-pricing-table>
      </Section>
    </Container>
  );
};

export default PricingTable;
