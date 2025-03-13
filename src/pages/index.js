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
        <Seo
            title="Amirbek's Portfolio Website"
            description={'Explore the innovative portfolio of Amirbek Shomurodov, a software engineer with specialized expertise in test automation, web and backend development, and data science. With a Bachelor’s degree in Computer Science from Brunel University London, Amirbek has contributed to significant projects like the development of a COVID-19 detection application and a robust e-commerce platform for emerging designers. Discover how his passion for technology and commitment to quality drives him to deliver high-performance solutions that enhance user experiences. Dive into a portfolio that not only showcases technical proficiency across Python, JavaScript, and more but also highlights his leadership in collaborative projects and community-oriented volunteer work.'}
            lang="en"
            image="/favicon.png"
        />
        <Page useSplashScreenAnimation={true}>
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
