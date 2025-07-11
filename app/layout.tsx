import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Gantavya Bansal | Freelance Web & AI Developer',
  description: 'Gantavya Bansal is a freelance developer and tech mentor from India. He helps build your digital presence with tailored solutions in web development, AI integration, and digital strategy. Explore his works, projects, tutorials, and 1:1 mentorship programs.',
  authors: [{ name: 'Gantavya Bansal', url: 'https://linkedin.com/in/bgantavya' }],
  keywords: [
    'Gantavya Bansal',
    'bgantavya',
    'gantavya',
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Gantavya Bansal | Freelance Web & AI Developer',
    description: 'Gantavya Bansal help businesses and individuals build their digital presence. Explore works, projects, and tech leadership of Gantavya Bansal. Gen AI and Fullstack Developer.',
    url: 'https://gantavya.me',
    siteName: 'Gantavya Bansal Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1584,
        height: 830,
        alt: 'Gantavya Bansal Tech Portfolio',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
  card: 'summary_large_image',
  title: 'Gantavya Bansal | Full-Stack Developer & Mentor',
  description: 'Explore the work and projects of Gantavya Bansal, full-stack web developer and tech mentor.',
  images: ['/img.png'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        </Head>
      </head>
      <body
        className={`${geistSans.variable} bg-black max-w-6xl m-auto ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


const schemaData =
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gantavya Bansal",
  "alternateName": "bgantavya",
  "url": "https://gantavya.me",
  "image": "https://gantavya.me/img.png",
  "jobTitle": [
    "Full-Stack Developer",
    "Coding Mentor",
    "Tech Community Builder"
  ],
  "sameAs": [
    "https://github.com/bgantavya",
    "https://linkedin.com/in/bgantavya",
    "https://leetcode.com/u/bgantavya",
    "https://www.hackerrank.com/profile/gantavya_bansal1",
    "https://instagram.com/bgantavya"
  ],
  "email": "gantavyaoo@gmail.com",
  "affiliation": [
    {
      "@type": "Organization",
      "name": "GLA University",
      "url": "https://gla.ac.in"
    },
    {
      "@type": "Organization",
      "name": "Let's Unbound",
      "url": "https://letsunbound.com"
    },
    {
      "@type": "Organization",
      "name": "Promptly AI",
      "url": "https://promptly.co.in"
    },
    {
      "@type": "Organization",
      "name": "Youth Unlock Educare",
      "url": "https://youthedu.org"
    }
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "GLA University",
    "sameAs": "https://gla.ac.in"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Let's Unbound",
    "sameAs": "https://letsunbound.com"
  },
  "knowsAbout": [
    "Next.js", "React.js", "Nest.js", "Node.js", "JavaScript", "TypeScript",
    "Python", "MongoDB", "Postman", "VR", "AI", "DevOps", "Cloud", "Open Source",
    "SEO", "Generative AI", "DSA", "APIs", "Blockchain", "Full-stack Development"
  ],
  "description": "Gantavya Bansal is a Full-Stack Developer, AI Enthusiast, Coding Mentor, and Tech Community Builder from India. Currently pursuing his B.Tech in Computer Science at GLA University (Class of 2027), Gantavya has a strong track record in building scalable applications, mentoring students, and contributing to innovative digital projects. He actively contributes to the tech community through mentoring, content creation, and open-source development.",
  "birthPlace": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://gantavya.me"
  },
  "hasOccupation": [
    {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "description": "Builds end-to-end software applications, specializing in frontend, backend, databases, and cloud technologies."
    },
    {
      "@type": "Occupation",
      "name": "Coding Mentor",
      "description": "Teaches programming concepts and project development to students and young developers."
    }
  ],
  "worksOn": [
    {
      "@type": "CreativeWork",
      "name": "Virtual Braj Museum",
      "url": "https://merobraj.org",
      "description": "A VR-powered museum showcasing Braj’s cultural heritage with 360° experiences and interactive exhibits."
    },
    {
      "@type": "CreativeWork",
      "name": "Trade It Up",
      "description": "A real-time platform for trading rare collectibles using smart contracts and dynamic pricing."
    },
    {
      "@type": "CreativeWork",
      "name": "Python Mastery",
      "description": "A 120-day learning program covering basic to advanced Python with hands-on projects."
    }
  ],
  "award": [
    "Top 1% in Odoo 36-hour Combat Hackathon out of 2500+ teams",
    "Organized & led multiple hackathons and tech workshops"
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "name": "Alumni Association - GLAU",
      "url": "https://www.instagram.com/alumniassociationgla/"
    }
  ],
  "headline": "Full-Stack Developer | AI Enthusiast | Coding Mentor | Community Builder",
  "gender": "Male",
  "nationality": "Indian",
  "dateModified": "2025-07-05"
}

