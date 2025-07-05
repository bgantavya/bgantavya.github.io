import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Gantavya Bansal | Full-Stack Developer, Coding Mentor & Tech Community Builder',
  description: 'Explore the professional portfolio of Gantavya Bansal — Full-Stack Developer, AI Enthusiast, Coding Mentor, and Tech Community Leader from India. Discover projects, tutorials, and innovative solutions in web development, AI integration, and digital strategy.',
  authors: [{ name: 'Gantavya Bansal', url: 'https://gantavya.me' }],
  keywords: [
    'Gantavya Bansal',
    'Full-Stack Developer',
    'Coding Mentor',
    'Web Development',
    'Next.js',
    'React',
    'Nest.js',
    'Portfolio',
    'Software Engineer',
    'AI Projects',
    'Python',
    'Open Source',
    'DevOps',
    'TypeScript',
    'Freelance Developer',
    'India Developer',
    'GLA University',
    'Tech Community',
    'SEO Portfolio'
  ],
  category: 'technology',
  creator: 'Gantavya Bansal',
  publisher: 'Gantavya Bansal',
  metadataBase: new URL('https://gantavya.me'),
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon.ico',
  },
  themeColor: '#0f172a',
  openGraph: {
    title: 'Gantavya Bansal | Full-Stack Developer & Mentor',
    description: 'Explore projects, and tech leadership of Gantavya Bansal. Full-stack web developer, community builder, and AI problem solver.',
    url: 'https://gantavya.me',
    siteName: 'Gantavya Bansal Portfolio',
    images: [
      {
        url: './img.png',
        width: 1200,
        height: 630,
        alt: 'Gantavya Bansal Tech Portfolio',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://gantavya.me',
  },
};




// {
//   title: "Tech Portfolio - Gantavya Bansal"
//   ,
//    };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-black max-w-6xl m-auto ${geistMono.variable} antialiased`}
      >
        
        {children}
      
      </body>
    </html>
  );
}

