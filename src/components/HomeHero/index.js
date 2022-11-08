import React from 'react';
import Translate from '@docusaurus/Translate';

export default function HomeHero() {

  return (
    <header>
      <div className="container hero-bg">
        <h1 className="hero-title padding-top-lg">
          <Translate>Helps organizations manage communication wisely</Translate>
        </h1>
      </div>
    </header>
  );
}