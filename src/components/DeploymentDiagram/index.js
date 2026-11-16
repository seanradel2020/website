import React from 'react';
import styles from './styles.module.css';

const steps = [
  {title: 'Change & test', detail: 'Feature branch → pull request', code: 'Map tests · build · browser checks'},
  {title: 'Build on main', detail: 'GitHub Actions · Ubuntu · Node 18', code: 'npm ci --force → npm run build'},
  {title: 'Publish', detail: 'build/ → gh-pages', code: 'peaceiris action · GITHUB_TOKEN'},
  {title: 'Serve', detail: 'GitHub Pages · HTTPS', code: 'radel.dev · custom domain'},
];

export default function DeploymentDiagram() {
  return <figure className={styles.diagram}>
    <figcaption>DEPLOYMENT ARCHITECTURE <span>Source → build → publish → visitors</span></figcaption>
    <ol className={styles.flow} aria-label="Website deployment flow">
      {steps.map((step, index) => <li key={step.title}>
        <span className={styles.stepNumber}>0{index + 1}</span>
        <strong>{step.title}</strong>
        <span className={styles.detail}>{step.detail}</span>
        <span className={styles.command}>{step.code}</span>
      </li>)}
    </ol>
    <p className={styles.note}>Merging to main triggers the deployment. GitHub Pages serves the generated files.</p>
  </figure>;
}
