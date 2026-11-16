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
        blog: {showReadingTime: true, blogTitle: 'Projects', blogDescription: 'Projects, architecture write-ups, and research by Sean Radel.'},
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/sean-portrait-2026.jpg',
      colorMode: {defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false},
      navbar: {
        title: 'Sean Radel',
        logo: {alt: '', src: 'img/blueprint-monogram.svg', width: 30, height: 30},
        items: [
          {type: 'docSidebar', sidebarId: 'aboutSidebar', position: 'left', label: 'About Me'},
          {to: '/blog', label: 'Projects', position: 'left'},
          {href: 'mailto:sradel2024@gmail.com', label: 'Get in touch', position: 'right'},
        ],
      },
      footer: {
        links: [
          {label: 'GitHub', href: 'https://github.com/seanradel2020'},
          {label: 'LinkedIn', href: 'https://www.linkedin.com/in/sean-radel/'},
        ],
        copyright: `© ${new Date().getFullYear()} Sean Radel`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.github},
    }),
};

export default config;
