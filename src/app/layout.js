import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio',
  description: 'UX Engineer',
  image: '/images/myLogo.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.image} type="image/svg+xml" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} `}>
        <div>{children}</div>
      </body>
    </html>
  );
}
