import './globals.css';
import { Roboto } from 'next/font/google'
import Head from 'next/head';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <Head>
        <title>PsicoCast</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
