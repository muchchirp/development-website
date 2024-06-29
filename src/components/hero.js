import { graphql } from "gatsby";
import * as React from "react";
import "./hero.css";  // Import the CSS file
import localImage from './hero-mobile.webp';  // Import the local image

export default function Hero(props) {
  // Optionally use props data if needed for dynamic content
  const imageAlt = props.image?.alt ? props.image.alt : 'Online security made easy';
  const imageUrl = props.image?.gatsbyImageData?.images?.fallback?.src || localImage;

  return (
    <section className="hero-section">
      <div className="hero-container hero-content-container">
        <div className="hero-wave hero-wave-1"></div>
        <div className="hero-wave hero-wave-2"></div>
        <div className="hero-wave hero-wave-3"></div>
        <div className="hero-wave hero-wave-4"></div>
        <div className="hero-wave hero-wave-5"></div>
        <div className="hero-row hero-row-center">
          <div className="hero-col">
            <div
              className="hero-tag"
              style={{ backgroundColor: 'transparent', color: '#16191c', borderColor: '#16191c' }}
            >
              FROM THE MAKERS OF AN AWARD-WINNING VPN
            </div>
          </div>
        </div>
        <div className="hero-row hero-row-center">
          <div className="hero-col hero-col-12 hero-col-sm-10 hero-col-md-12">
            <h1 className="hero-title">Online security made easy</h1>
          </div>
          <div className="hero-col hero-col-12 hero-col-sm-6">
            <p className="hero-text">
              Surf the web without tracking with a VPN, shield your devices with Antivirus, &amp; guard your identity with an all-in-one app.
            </p>
          </div>
        </div>
        <div className="hero-row">
          <div className="hero-col">
            <a
              className="hero-button hero-button-tertiary hero-button-large hero-button-not-responsive hero-cta"
              href="/pricing"
            >
              Get CicadaVPN
            </a>
          </div>
        </div>
      </div>
      <div className="hero-container hero-image-container">
        <div className="hero-row">
          <div className="hero-col">
            <picture className="hero-image">
              <source srcSet={localImage} media="(min-width: 768px)" width="1168" height="600" />
              <source srcSet={localImage} media="(min-width: 426px)" width="735" height="470" />
              <img
                alt={imageAlt}
                fetchPriority="high"
                loading="eager"
                width="735"
                height="470"
                decoding="async"
                className="hero-image"
                style={{ color: 'transparent' }}
                srcSet={`${localImage} 1x, ${localImage} 2x`}
                src={imageUrl}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export const query = graphql`
  fragment HomepageHeroContent on SanityHomepageHero {
    image {
      gatsbyImageData
      alt
    }
  }
`;
