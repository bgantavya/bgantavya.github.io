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
  title: "Tech Portfolio - Gantavya Bansal"
  ,
  authors: [{ name: "Gantavya Bansal" }],
  description: `Gantavya Bansal is a Full-Stack Developer Coding Mentor and Tech Community Builder
Gantavya Bansal is a Computer Science Engineering undergraduate (Class of 2027) currently pursuing his B.Tech in Computer Science at GLA University, India. Since 2020, Gantavya has actively monetized his skills, starting with content creation inspired by his personal interests. His journey evolved into freelancing as a social media manager—overseeing digital marketing, running ad campaigns, and eventually transitioning into professional web development.
Currently, Gantavya Bansal works as a Coding Mentor at Let’s Unbound, where he guides students through programming concepts and project-based learning. At GLA University, Gantavya also leads Team Editorial of the Alumni Association, curating impactful content strategies and driving alumni engagement initiatives across digital platforms.
With rich hands-on experience working with startups and scale-ups, Gantavya Bansal has consistently delivered user-centric digital solutions as a core team member. Gantavya is proficient in a broad range of programming languages including C/C++, Java, JavaScript, Python, SQL, and TypeScript. He harnesses modern technologies such as React.js, Next.js, Nest.js, Express.js, Selenium, Postman, WordPress, AR/VR, and n8n, applying them across diverse domains like B2C, B2B, e-commerce, edtech, and AI-powered platforms.
As a full-stack developer, Gantavya transforms complex problem statements into seamless, functional user experiences by blending computational thinking with clean design and system architecture. Gantavya specializes in frontend and backend development, database design, DevOps, cloud platforms, generative AI, and AI agent integration.
One of Gantavya's most notable projects is merobraj.org—a VR-powered digital tourism platform designed to promote cultural tourism and socio-economic development in the Braj region. This innovation was acquired in 2025 by one of Gantavya’s university professors.
Gantavya Bansal has earned recognition for organizing and winning multiple hackathons, including placing in the top 1% out of 2500+ teams in the Odoo 36-hour Combat Hackathon. As a passionate contributor to the tech community, Gantavya actively fosters peer learning, innovation, and collaborative growth. Gantavya also had the opportunity to visit ARIES (Aryabhatta Research Institute of Observational Sciences) to explore AI applications in astronomical research and predictive modeling.`,
};

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

