import type { AppProps } from 'next/app';
import { GlobalStyles } from '@/styles/globalStyles';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from '@/styles/theme';
import ThemeContext from '@/contexts/ThemeContext';
import { useTheme } from '@/hooks/useTheme';

function MyApp({ Component, pageProps }: AppProps<{ fallback: any }>) {
  const { fallback } = pageProps;
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>Next SSG Blog</title>
        <meta name='description' content='Next SSG Blog' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css'
          as='script'
        />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css'
          as='script'
        />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css'
          as='script'
        />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css'
          as='script'
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
          rel='stylesheet'
        />
      </Head>
      <SWRConfig value={{ fallback }}>
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            {GlobalStyles}
            <Component {...pageProps} />
          </ThemeProvider>
        </ThemeContext.Provider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
