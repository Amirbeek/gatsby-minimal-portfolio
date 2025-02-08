import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
      <>
        <Seo title="Portfolio Minimal" />
        <Page useSplashScreenAnimation>
          <HeroSection sectionId="hero" />
            <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog', 'Medium']} />
          <AboutSection sectionId="about" heading="About Me" />
          <InterestsSection sectionId="details" heading="Details" />
          <ProjectsSection sectionId="projects" heading="Projects" />
          <ContactSection sectionId="github" heading="Contact Me" />
        </Page>
      </>
  );
}
