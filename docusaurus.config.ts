import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const repoUrl = 'https://github.com/pechatov/recsys-handbook';

const config: Config = {
  title: 'RecSys Handbook',
  tagline: 'Открытый учебник по рекомендательным системам',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: process.env.SITE_URL ?? 'https://pechatov.github.io',
  baseUrl: process.env.BASE_URL ?? '/recsys-handbook/',

  organizationName: 'pechatov',
  projectName: 'recsys-handbook',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    localeConfigs: {
      ru: {
        label: 'Русский',
        htmlLang: 'ru-RU',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${repoUrl}/edit/main/`,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: [
            './node_modules/katex/dist/katex.min.css',
            './src/css/custom.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'RecSys Handbook',
      logo: {
        alt: 'RecSys Handbook',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'handbookSidebar',
          position: 'left',
          label: 'Учебник',
        },
        {
          to: '/docs/development/tech-stack',
          label: 'Технологии',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: repoUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Материалы',
          items: [
            {
              label: 'Введение',
              to: '/docs/intro',
            },
            {
              label: 'Технологический стек',
              to: '/docs/development/tech-stack',
            },
          ],
        },
        {
          title: 'Проект',
          items: [
            {
              label: 'GitHub',
              href: repoUrl,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RecSys Handbook contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'python', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
