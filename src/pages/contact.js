import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

const contacts = [
  {label: 'Email', value: 'sradel2024@gmail.com', href: 'mailto:sradel2024@gmail.com'},
  {label: 'GitHub', value: 'github.com/seanradel2020', href: 'https://github.com/seanradel2020'},
  {label: 'LinkedIn', value: 'linkedin.com/in/sean-radel', href: 'https://www.linkedin.com/in/sean-radel/'},
];

export default function Contact() {
  return <Layout title="Contact me" description="Reach out to Sean Radel to discuss projects, collaborate, or talk about his experience in cloud infrastructure, security, and automation.">
    <main className={styles.page}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>LET’S CONNECT</p>
        <h1>Contact me</h1>
        <p className={styles.invitation}>Want to discuss a project, collaborate, or talk about my experience? I’d love to hear from you.</p>
        <p className={styles.note}>Send me an email, or connect on GitHub or LinkedIn.</p>
      </div>
      <ul className={styles.contacts} aria-label="Ways to contact Sean Radel">
        {contacts.map(contact => <li key={contact.label}>
          <a className={styles.link} href={contact.href}>
            <span className={styles.details}>
              <span className={styles.label}>{contact.label}</span>
              <span className={styles.value}>{contact.value}</span>
            </span>
            <span className={styles.arrow} aria-hidden="true">↗</span>
          </a>
        </li>)}
      </ul>
    </main>
  </Layout>;
}
