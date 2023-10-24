import React from 'react';
import { HeroSection, Container, AboutSection,SkillsSection } from '../components';

function Home() {
  return (
    <Container>
      <HeroSection />
      <AboutSection />
      <SkillsSection/>
    </Container>
  );
}

export default Home;
