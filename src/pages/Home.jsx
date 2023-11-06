import React from 'react';
import {
  HeroSection,
  Container,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  SliderSection,
} from '../components';

function Home() {
  return (
    <Container>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <SliderSection />
      <ContactSection />
    </Container>
  );
}

export default Home;
