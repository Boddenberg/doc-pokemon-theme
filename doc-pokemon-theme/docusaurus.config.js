// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Doc Pokémon',
  tagline: 'Gotta Document ’Em All!',
  favicon: 'img/pokeball.ico',

  future: {
    v4: true,
  },

  url: 'https://boddenberg.github.io',
  baseUrl: '/doc-pokemon-theme/',

  organizationName: 'Boddenberg',
  projectName: 'doc-pokemon-theme',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Boddenberg/doc-pokemon-theme/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Boddenberg/doc-pokemon-theme/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card-pokemon.jpg',
      navbar: {
        title: 'Doc Pokémon',
        logo: {
          alt: 'Logo PokéDex',
          src: 'img/pokeball.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Boddenberg/doc-pokemon-theme',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Conteúdo',
            items: [
              {
                label: 'Documentação',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Comunidade Pokémon',
            items: [
              {
                label: 'Bulbapedia',
                href: 'https://bulbapedia.bulbagarden.net/',
              },
              {
                label: 'Serebii',
                href: 'https://www.serebii.net/',
              },
            ],
          },
          {
            title: 'Código',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Boddenberg/doc-pokemon-theme',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Doc Pokémon. Feito com ❤️ por um Treinador Pokémon usando Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
git