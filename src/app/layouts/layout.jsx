import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>PolitiCompare</title>
        <meta name="description" content="Compare political candidates easily" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={`min-h-screen ${inter.className}`}>{children}</div>
    </>
  );
}
