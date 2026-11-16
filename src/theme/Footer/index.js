import React from 'react';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) return null;

  return <footer className={styles.footer}>
    <div className={styles.inner}>
      <span>{footer.copyright}</span>
      <nav aria-label="Social links">
        {footer.links.map(item => <Link key={item.label} to={item.href}>{item.label} <span aria-hidden="true">↗</span></Link>)}
      </nav>
    </div>
  </footer>;
}
