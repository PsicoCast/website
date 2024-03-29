import './globals.css';
import { Roboto } from 'next/font/google'

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
        <html>
          <body className={`${roboto.className} antialiased`}>{children}</body>
        </html>
  );
}
