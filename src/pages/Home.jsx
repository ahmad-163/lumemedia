import React from 'react';
import Hero from '../sections/Hero';
import Manifesto from '../sections/Manifesto';
import SelectedPortfolio from '../sections/SelectedPortfolio';
import PerformanceAnalytics from '../sections/PerformanceAnalytics';
import Services from '../sections/Services';
import Industries from '../sections/Industries';
import WhyLume from '../sections/WhyLume';
import Workflow from '../sections/Workflow';
import FounderTeaser from '../sections/FounderTeaser';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <SelectedPortfolio />
      <PerformanceAnalytics />
      <Services />
      <Industries />
      <WhyLume />
      <Workflow />
      <FounderTeaser />
      <FinalCTA />
    </main>
  );
}
