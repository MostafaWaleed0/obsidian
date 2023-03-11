import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/matter-md.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/matter-rg.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} className={myFont.className} />
    </ThemeProvider>
  );
}
