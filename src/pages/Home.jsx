import React from 'react';
import {
  HeroSection,
  Container,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from '../components';

function Home() {
  return (
    <Container>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
}

export default Home;
