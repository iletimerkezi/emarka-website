import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HomeHero from '@site/src/components/HomeHero';
import IMLogo from '@site/static/img/iletimerkezi-logo.png';
import Gears from '@site/static/img/gears.png';
import Consultancy from '@site/static/img/consultancy.png';
import A2P from '@site/static/img/a2p.png';
import IletiMerkezi from '@site/static/img/iletimerkezi_toplusms.jpg';
import Translate from '@docusaurus/Translate';

export default function Home() {

  return (
    <div className="main-bg margin-top-none">
      <Layout>
          <HomeHero />
          <main className="main">
            <Services />
            <Projects />
            <Contact />
          </main>
      </Layout>
    </div>
  );
}

function Services() {

  return (
    <section id="services" className='padding-top--lg padding-bottom--lg'>
      <div className="container">
        <div className="row">
          <div className='col'>
            <div className="c-center">
              <h1 className="welcome-title padding-top-lg">
                <Translate>Services</Translate>
              </h1>
              <h3 className="welcome-title-desc">
                <Translate>We create useful communication channels.</Translate>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className="card-demo">
              <div className="card">
                <div className="card__image">
                  <img
                    src={Gears}
                    alt="Enterprise Communications"
                    title="Enterprise Communications" />
                </div>
                <div className="card__body">
                  <h4>
                    <Translate>Enterprise Communications</Translate>
                  </h4>
                  <small>
                    <Translate>With our deep technology know-how, we offer projects that require advanced technology and knowledge by offering customized solutions beyond standard products.</Translate>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card-demo">
              <div className="card">
                <div className="card__image">
                  <img
                    src={A2P}
                    alt="A2P SMS Platform"
                    title="A2P SMS Platform" />
                </div>
                <div className="card__body">
                  <h4><Translate>A2P SMS Platform</Translate></h4>
                  <small>
                    <Translate>By establishing a direct connection with all the mobile operators in Turkey, our users were offered a perfect user experience with excellent service quality.</Translate>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="card-demo">
              <div className="card">
                <div className="card__image">
                  <img
                    src={Consultancy}
                    alt="Consultancy"
                    title="Consultancy" />
                </div>
                <div className="card__body">
                  <h4><Translate>Consultancy</Translate></h4>
                  <small>
                    <Translate>We provide consultancy services to global firms or startups who wants to join the Turkish market where there is an 80 million consumer potential with our knowledge and experience.</Translate>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {

  return (
    <section id="projects" className='padding-top--lg padding-bottom--lg'>
      <div className="container">
        <div className="row">
          <div className='col'>
            <div className="c-center">
              <h1 className="welcome-title padding-top-lg">
                <Translate>Projects</Translate>
              </h1>
              <h3 className="welcome-title-desc">
                <Translate>Our purpose is to gather the brands' solutions with customers’ needs.</Translate>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--8">
            <div className="c-center">
              <img src={IletiMerkezi} alt="İleti Merkezi" />
            </div>
          </div>
          <div className='col col--4'>
            <div className="c-center">
              <p className='margin-top--md'>
                <Translate>Nowadays, you need effective and targeted advertisement. Most of your customers are in different networks. Managing all the campaigns from a single center, will let you to do more effective actions, create customized campaigns, provide quality services and sophisticated analysis options.</Translate>
              </p>
              <h4 className="welcome-title-desc">
                <span class="badge badge--danger">
                  <Link to="https://www.iletimerkezi.com">
                    <img src={IMLogo} alt="İleti Merkezi Logo" />
                  </Link>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className='padding-top--lg padding-bottom--lg'>
      <div className="container">

        <div className="row">
          <div className='col'>
            <div className="c-center">
              <h1 className="welcome-title padding-top-lg">
                <Translate>Contact</Translate>
              </h1>
              <h3 className="welcome-title-desc">
                eMarka İletişim ve Bilgi Teknolojileri A.Ş.
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className='col col--6'>
            <p className='margin-horiz--lg'>
              <Translate>
                Our company provides SMS marketing, email marketing and social media consulting services.
                Also we develop customized platforms for our customers.
              </Translate>
            </p>
            <p className='margin-horiz--lg'>
              <Link to='/reseller'>
                <Translate>Franchises allowed to send SMS in the name of eMarka İletişim license.</Translate>
              </Link>
              <br />
              <br />
              <Link to='/b186'>
                <Translate>Click for SMS cancellation and complaint about the service.</Translate>
              </Link>
            </p>
          </div>
          <div className='col col--6'>
            <ul className='contact margin-horiz--lg'>
              <li><b>Address:</b> Fatih Caddesi No:61-63 Serenity Plus Office B-Blok Kat:4 D:42 34303 Küçükçekmece / İstanbul
                <Link to='https://maps.google.com/maps?cid=12597982343844134328'>
                  (Google Maps)
                </Link>
              </li>
              <li><b>Email:</b> destek@emarka.com.tr</li>
              <li><b>Tel:</b> (0212) 543-4210</li>
              <li><b>Fax:</b> (0212) 543-4210</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
