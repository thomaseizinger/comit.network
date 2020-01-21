import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Why COMIT?</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        C( )MIT removes the need for trusted third parties when exchanging cryptocurrencies.
        C( )MIT enables atomic swaps using Hash Time-Locked Contracts (HTLCs).
      </>
    ),
  },
  {
    title: <>Atomic Swap</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Use the C( )MIT software to trade cryptocurrencies on the internet peer-to-peer. Because it uses atomic swaps you do not need to use an exchange or trust the other party - your funds are safe at all time.
        Your keys, your assets.
      </>
    ),
  },
  {
    title: <>For Developers</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        C( )MIT is built with developers in mind. You can integrate C( )MIT in your own software or use its powerful API to create new cross-chain applications.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
