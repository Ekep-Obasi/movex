import { DocsThemeConfig } from 'nextra-theme-docs';
import { Logo } from './modules/Logo';
import { Footer } from './components/Footer';
import { useRouter } from 'next/router';

const tags = {
  description:
    'Serverless realtime data sharing infrastructure for frontend developers. Server Authoritative. Private State. State Synchronization.',
};

const config: DocsThemeConfig = {
  logo: <Logo />,
  banner: {
    key: 'dev-version-sept-2024',
    text: () => (
      <span>
        <b>We're Participating in #Hacktoberfest2024! 🤩</b>{' '}
        Check out our <a href="https://github.com/movesthatmatter/movex/issues" target='_blank' style={{ textDecoration: 'underline' }}>open issues</a> and help us simplify multiplayer game development!
      </span>
    ),
    dismissible: true,
  },
  project: {
    link: 'https://github.com/movesthatmatter/movex',
  },
  chat: {
    link: 'https://discord.gg/N8k447EmBh',
  },
  docsRepositoryBase: 'https://github.com/movesthatmatter/movex',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Movex" />
      <meta property="og:description" content={tags.description} />
      <meta name="apple-mobile-web-app-title" content="Movex" />
    </>
  ),
  footer: {
    text: <Footer />,
  },
  // darkMode: false,
  // nextThemes: {
  //   defaultTheme: 'dark',
  // },
  useNextSeoProps: () => {
    const { asPath } = useRouter();

    return {
      titleTemplate: asPath === '/' ? 'Movex' : '%s | Movex',
      description: tags.description,
    };
  },
};

export default config;
