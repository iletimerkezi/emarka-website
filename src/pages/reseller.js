import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';

export default function Reseller() {

  return (
    <div className="main-bg margin-top-none">
      <Layout>
        <header>
          <div className="container hero-bg">
            <h1 className="hero-title padding-top-lg">
              <Translate>
                Our company stopped its reseller program on 01.01.2017.
              </Translate>
            </h1>
          </div>
        </header>
      </Layout>
    </div>
  );
}