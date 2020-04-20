import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ComparisonTable from './../components/ComparisonTable';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Documentation for DEITY Falcon"
      description="DEITY Falcon Platform documentation and user guides"
    >
      <header className={classnames("hero hero--theme", styles.heroBanner)} style={{ backgroundImage: "url('img/pattern-honeycomb-secondary.svg')" }}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.heroSearch}>
            <SearchBar
              placeholder="Search our documentation"
              position="home"
              isSearchBarExpanded={true}
              size="large"
            />
          </div>
        </div>
      </header>
      <main>
        <section className={styles.about}>
          <div className={classnames("container", styles.aboutContainer)}>
            <div className={styles.aboutColumn}>
              <h3>What is Falcon Platform?</h3>
              <p>The Falcon Platform is a fully packed hosted front-end platform, which allows to create the best front-end experiences for eCommerce.</p>
              <p>Falcon is not just a PWA theme, it is a complete platform to build the best shopping experience with top performance and unlimited flexibility, enabling your future growth.</p>
              <Link
                to="/docs/platform/overview/about"
                target="_blank"
                className="button"
                rel="noreferrer noopener"
              >Read our documentation</Link>
            </div>
            <div className={styles.aboutColumn}>
              <img
                srcSet="img/hero-pwa-falcon-700.png 700w,
                img/hero-pwa-falcon-1200.png 1200w"
                sizes="(max-width: 600px) 700px, 120px"
                loading="lazy"
                width="1200px"
                height="1197px"
                src="img/hero-pwa-falcon-700.png"
                alt="Deity Falcon illustration"
                className={styles.aboutImg}
              />
            </div>
          </div>
        </section>
        <section className={styles.comparison}>
          <div className="container">
            <h3>Falcon Platform vs Falcon Open Source</h3>
            <p>We provide 2 variations of Falcon. Falcon Open Source is the open-source <strong>predecessor</strong> to Falcon Platform.</p>
            <ComparisonTable />
            <p>To get started with Falcon Open Source you can download it <Link
              href="https://github.com/deity-io/falcon"
              target="_blank"
              rel="noreferrer noopener"
            >from our GitHub</Link>.</p>
            <p>If you want to use Falcon Platform please get in touch with our team for who will help you get set up and give you pricing information.</p>
            <p><Link
              href="https://deity.io/contact"
              target="_blank"
              className="button"
              rel="noreferrer noopener"
            >Get in touch</Link></p>
          </div>
        </section>
        <section className="hero hero--theme" style={{ backgroundImage: "url('img/waves.jpg')" }}>
          <div className={classnames("container", styles.architectureContainer)}>
            <div>
              <h3>The Falcon Platform Architecture</h3>
              <p>The Falcon Front-End Platform has a unique decentralized architecture. This architecture makes the platform extremely reliable, flexible and unlimitedly scalable, while at the same time reducing complexity.</p>
              <p>Combined with Falcon Platform Cloud you can enjoy easy deployments, localized hosting and automatic scalability.</p>
            </div>
            <div>
              <img
                src="img/falcon-architecture-expansive.svg"
                alt="Deity Falcon architecture diagram"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
