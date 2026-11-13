// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sean Radel',
  tagline: 'Cloud infrastructure, security, and thoughtful automation.',
  favicon: 'img/monogram.svg',
  url: 'https://radel.dev',
  baseUrl: '/',
  organizationName: 'seanradel2020',
  projectName: 'website',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {sidebarPath: './sidebars.js'},
        blog: {showReadingTime: true},
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/sean-portrait-2026.jpg',
      colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
      navbar: {
        title: 'Sean Radel',
        logo: {alt: '', src: 'img/monogram.svg', width: 32, height: 32},
        items: [
          {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Work'},
          {type: 'docSidebar', sidebarId: 'lifeSidebar', position: 'left', label: 'Life'},
          {to: '/blog', label: 'Writing', position: 'left'},
          {href: 'https://www.linkedin.com/in/sean-radel/', label: 'LinkedIn', position: 'right'},
          {href: 'https://github.com/seanradel2020', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Explore',
            items: [
              {label: 'Work & experience', to: '/docs/work/intro'},
              {label: 'Life outside work', to: '/docs/life/about'},
              {label: 'Writing', to: '/blog'},
            ],
          },
          {
            title: 'Say hello',
            items: [
              {label: 'Email', href: 'mailto:sradel2024@gmail.com'},
              {label: 'LinkedIn', href: 'https://www.linkedin.com/in/sean-radel/'},
              {label: 'GitHub', href: 'https://github.com/seanradel2020'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Sean Radel`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
