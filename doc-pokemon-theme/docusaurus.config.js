import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Doc Pokémon',
  tagline: 'Gotta Document ’Em All!',
  favicon: 'img/pokeball.ico',

  future: { v4: true },

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

  themes: ['@docusaurus/theme-mermaid'],
  markdown: { mermaid: true },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: ['/docs/intro', '/docs'], to: '/docs/parametrizador/pagina-inicial' },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
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
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card-pokemon.jpg',
    navbar: {
      title: 'Doc Pokémon',
      logo: { alt: 'Logo PokéDex', src: 'img/pokeball.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentação' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/Boddenberg/doc-pokemon-theme', label: 'GitHub', position: 'right' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Conteúdo',
          items: [
            { label: 'Documentação', to: '/docs/parametrizador/pagina-inicial' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Comunidade Pokémon',
          items: [
            { label: 'Bulbapedia', href: 'https://bulbapedia.bulbagarden.net/' },
            { label: 'Serebii', href: 'https://www.serebii.net/' },
          ],
        },
        {
          title: 'Código',
          items: [
            { label: 'GitHub', href: 'https://github.com/Boddenberg/doc-pokemon-theme' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Doc Pokémon. Feito com ❤️ por um Treinador Pokémon usando Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: {
        themeVariables: {
          fontFamily: 'Inter, Segoe UI, Roboto, system-ui, sans-serif',
          primaryColor: '#0d47a1',
          lineColor: '#0d47a1',
          actorBorder: '#90caf9',
          actorBkg: '#e3f2fd',
          signalColor: '#0d47a1',
          noteBkgColor: '#fffde7',
          noteTextColor: '#3e2723',
          activationBkgColor: '#bbdefb',
          activationBorderColor: '#0d47a1',
        },
        flowchart: { curve: 'basis' },
        sequence: { mirrorActors: false, showSequenceNumbers: false },
      },
    },
  },
};

export default config;
