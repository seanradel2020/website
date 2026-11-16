import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

const description = 'I build and secure cloud infrastructure, automating across thousands of cloud accounts to reduce costs, increase governance, and prepare audit-ready platforms.';
const environments = ['AWS', 'Gov Cloud', 'GCP', 'Azure', 'On-Premise'];
const evidence = [
  {id: 'security', symbol: 'shield', problem: 'Cloud governance gaps', work: 'Automated remediation', value: '130K+', result: 'remediations / month'},
  {id: 'cost', symbol: 'savings', problem: 'Wasted cloud spend', work: 'Resource cleanup policies', value: '$115K+', result: 'saved / month'},
  {id: 'platforms', symbol: 'platforms', problem: 'Complex platform support', work: 'CI/CD deployment', value: '300+', result: 'serverless automations'},
];

function Icon({name}) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'shield' && <><path d="M12 3 20 6v6c0 5-8 9-8 9S4 17 4 12V6Z" /><path d="m8 12 3 3 5-6" /></>}
    {name === 'savings' && <><path d="M4 5v14h16M7 8l5 5 3-3 5 6M16 16h4v-4" /></>}
    {name === 'platforms' && <><rect x="4" y="3" width="16" height="7" rx="2" /><rect x="4" y="14" width="16" height="7" rx="2" /><path d="M8 6.5h.01M8 17.5h.01M12 6.5h5M12 17.5h5M12 10v4" /></>}
  </svg>;
}

export default function BlueprintHomepage() {
  const portrait = useBaseUrl('/img/sean-portrait-2026.jpg');

  return <Layout title="Cloud governance, automation & site reliability" description={`Sean Radel, Senior IT Systems Engineer at Palo Alto Networks. ${description}`}>
    <div className={styles.page}>
      <div className={styles.inner}>
        <main id="landing-main">
          <div className={styles.hero}>
            <div className={styles.copy}>
              <p className={styles.identity}><span className={styles.status} />SEAN RADEL · SRE & CLOUD ENGINEER</p>
              <h1>Increasing governance.<br />Decreasing cloud waste.<br /><em>Engineering at scale.</em></h1>
              <p className={styles.summary}>{description}</p>
              <div className={styles.person}>
                <img src={portrait} alt="Sean Radel in Ho Chi Minh City, Vietnam" width="1158" height="768" />
                <p className={styles.role}>Senior IT Systems Engineer <span>at Palo Alto Networks</span></p>
              </div>
              <div className={styles.actions}>
                <Link className={styles.primaryAction} to="/docs/life/about">About Me <span aria-hidden="true">↗</span></Link>
                <Link className={styles.secondaryAction} to="/contact">Contact me <span aria-hidden="true">↗</span></Link>
              </div>
            </div>

            <div className={styles.systemDiagram} aria-label="Selected impact">
              <div className={styles.diagramHeader}><span className={styles.status} /><span>FROM PROBLEM TO IMPACT</span><span>SR / 01</span></div>
              <div className={styles.diagramColumns}><span>THE PROBLEM</span><span>MY WORK</span><span>THE EVIDENCE</span></div>
              {evidence.map(item => <Link to="/docs/work/intro#experience" className={`${styles.flow} ${styles[item.id]}`} key={item.id}>
                <span className={styles.flowProblem}><Icon name={item.symbol} /><span>{item.problem}</span></span>
                <span className={styles.connector} aria-hidden="true">⟶</span>
                <span className={styles.flowWork}>{item.work}</span>
                <span className={styles.connector} aria-hidden="true">⟶</span>
                <span className={styles.flowResult}><strong>{item.value}</strong><span>{item.result}</span></span>
              </Link>)}
            </div>
          </div>

          <div className={styles.contextStrip}>
            <span>OPERATING ACROSS</span>
            {environments.map((name, index) => <React.Fragment key={name}>{index > 0 && <i aria-hidden="true">/</i>}<strong>{name}</strong></React.Fragment>)}
          </div>

          <section className={styles.nextSection} aria-label="More about Sean">
            <div><p className={styles.eyebrow}>WHAT I DO</p><h2>Security. Reliability.<br />Governance. Automation.</h2></div>
            <div>
              <p>I operate platforms across AWS, GCP, and FedRAMP environments, and build custom AI tools to solve organizational problems.</p>
              <Link to="/docs/work/intro">Experience & tools <span aria-hidden="true">↗</span></Link>
              <Link to="/blog">Projects <span aria-hidden="true">↗</span></Link>
            </div>
            <div>
              <p className={styles.eyebrow}>TRAVEL & LIFE</p><p>Places I’ve visited and what I enjoy outside work.</p>
              <Link to="/docs/life/travel">Travel <span aria-hidden="true">↗</span></Link>
              <Link to="/docs/life/about">About Me <span aria-hidden="true">↗</span></Link>
            </div>
          </section>
        </main>

      </div>
    </div>
  </Layout>;
}
