import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const work = [
  {
    number: '01',
    category: 'CLOUD GOVERNANCE & FINOPS',
    title: 'Automation with real impact.',
    description: 'At CyberArk, I wrote cloud policies that remediate security issues and remove unused resources. The platform performs 60K+ security and 70K+ FinOps remediations monthly, saving over $115K per month.',
    tools: 'AWS · Stacklet · Cloud Custodian',
    to: '/docs/work/intro#cyberark',
  },
  {
    number: '02',
    category: 'FEDRAMP & RELIABILITY',
    title: 'Built for demanding environments.',
    description: 'I led Stacklet’s first FedRAMP High deployment in AWS GovCloud. Today, I own platform availability, upgrades, incident response, and continuous monitoring across GovCloud and commercial AWS.',
    tools: 'AWS GovCloud · ECS · FedRAMP High',
    to: '/docs/work/intro#palo-alto-networks',
  },
  {
    number: '03',
    category: 'AI & DEVELOPER EXPERIENCE',
    title: 'Better support, less friction.',
    description: 'I’m building an AI support-triage bot for an SRE team supporting 1,000+ GKE namespaces. It draws on support history and documentation to classify requests and gather the details needed to route them.',
    tools: 'AWS Bedrock · Lambda · Slack',
    to: '/docs/work/intro#palo-alto-networks',
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.section} aria-labelledby="work-heading">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>01 / WHAT I WORK ON</p>
          <Heading as="h2" id="work-heading">Less manual work.<br />More resilient systems.</Heading>
        </div>
        <Link to="/docs/work/intro">Full experience <span aria-hidden="true">↗</span></Link>
      </div>
      <div className={styles.grid}>
        {work.map((item) => (
          <article className={styles.project} key={item.number}>
            <div className={styles.projectTop}><span>{item.number}</span><span aria-hidden="true">↗</span></div>
            <p className={styles.category}>{item.category}</p>
            <Heading as="h3"><Link to={item.to}>{item.title}</Link></Heading>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.tools}>{item.tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
