import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

export default function Home() {
  const portrait = useBaseUrl('/img/sean-portrait-2026.jpg');

  return (
    <Layout
      title="Cloud, security & automation"
      description="Sean Radel is a Senior IT Systems Engineer at Palo Alto Networks working on cloud governance, FedRAMP infrastructure, site reliability, and AI support tooling.">
      <main className={styles.home}>
        <header className={styles.hero}>
          <div className={styles.introduction}>
            <p className={styles.eyebrow}>ENGINEERING / SECURITY / AUTOMATION</p>
            <Heading as="h1" className={styles.name}>Sean Radel<span>.</span></Heading>
            <p className={styles.statement}>Cloud systems.<br />Secure by design.</p>
            <p className={styles.summary}>
              I build and run cloud infrastructure, turn security requirements into
              automation, and make complex systems easier to operate.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary" to="/docs/work/intro">
                Explore my work <span aria-hidden="true">↗</span>
              </Link>
              <a className={styles.contact} href="mailto:sradel2024@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <p className={styles.currentRole}>
              <span className={styles.statusDot} aria-hidden="true" />
              Senior IT Systems Engineer <span className={styles.roleCompany}>at Palo Alto Networks</span>
            </p>
          </div>
          <figure className={styles.portrait}>
            <img src={portrait} alt="Sean Radel" width="1158" height="768" />
            <figcaption>A little perspective, away from the screen.</figcaption>
          </figure>
        </header>

        <section className={styles.focus} aria-label="Areas of focus">
          <p>FROM POLICY TO PRODUCTION</p>
          <span>Cloud governance</span><span>Site reliability</span><span>Applied AI</span>
        </section>

        <HomepageFeatures />

        <section className={styles.beyond} aria-labelledby="beyond-heading">
          <div>
            <p className={styles.eyebrow}>02 / AWAY FROM THE TERMINAL</p>
            <Heading as="h2" id="beyond-heading">There’s more to life<br />than uptime.</Heading>
          </div>
          <div className={styles.beyondDescription}>
            <p>Usually happiest near the water, on a trail, or making something from scratch in the kitchen. Always up for a good meal and a new place to explore.</p>
            <Link className={styles.textLink} to="/docs/life/about">A little more about me <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
        <section className={styles.writing} aria-label="Writing and research">
          <p>NOTES & RESEARCH</p>
          <Link to="/blog">Ideas on technology, privacy, and everything in between. <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
    </Layout>
  );
}
