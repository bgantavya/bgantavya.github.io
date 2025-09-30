'use client'
import MagicPage from "../magic/page";
// import { Instagram, ExternalLink, Code, Trophy, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Profile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("whoami");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // const actionButtons = [
  //   {
  //     href: "https://leetcode.com/u/bgantavya",
  //     icon: Code,
  //     label: "LeetCode",
  //     color: "hover:bg-orange-700/20 hover:border-orange-500/50"
  //   },
  //   {
  //     href: "https://www.hackerrank.com/profile/gantavya_bansal1",
  //     icon: Trophy,
  //     label: "HackerRank",
  //     color: "hover:bg-green-700/20 hover:border-green-500/50"
  //   },
  //   {
  //     href: "https://instagram.com/bgantavya",
  //     icon: Instagram,
  //     label: "Instagram",
  //     color: "hover:bg-pink-700/20 hover:border-pink-500/50"
  //   },
  //   {
  //     href: "mailto:bgantavya@gmail.com",
  //     icon: Mail,
  //     label: "Email",
  //     color: "hover:bg-pink-700/20 hover:border-pink-500/50"
  //   }
  // ];

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            id="whoami" 
            className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent px-8 py-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-fuchsia-500/20 shadow-2xl shadow-fuchsia-500/10"
          >
            {`>>> whoami`}
          </h2>
        </div>

        {/* Profile Content */}
        <div className={`space-y-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-stone-900/20 to-gray-900/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
            <div className="prose prose-invert max-w-none text-base sm:text-lg leading-relaxed text-justify space-y-6">
              <p className="text-gray-200">
  Gantavya Bansal is a passionate Computer Science engineering undergrad (Class of 2027),
  <MagicPage text={` currently pursuing his B.Tech in CSE at GLA University. `} />
  His journey into tech began in 2020, when he started monetizing his skills as a teenager —
  <MagicPage text={` launching his career through content creation rooted in personal interests. He soon transitioned into freelancing as a social media manager, orchestrating marketing campaigns and ad strategies before pivoting into web development.`}>
    <MagicPage text={` Outside of tech, he finds joy in cooking, exploring the outdoors, and capturing life through photography.`} />
  </MagicPage>
              </p>
  
              <p className="text-gray-200">
  Currently, Gantavya serves as a Coding Mentor,
  <MagicPage text={` at Let's Unbound, where he guides students in foundational and advanced programming concepts.`} />
  On campus, he leads the Editorial team of the University Alumni Association,
  <MagicPage text={` curating impactful content strategies that boost alumni engagement and foster community ties.`} />
                He is also building <strong className="text-fuchsia-400">OurVansh</strong> —
  <MagicPage text={` a digital platform designed to reconnect families with their roots by mapping relationships and preserving ancestral heritage.`} />
              </p>

              <p className="text-gray-200">
  With hands-on experience at both startups and fast-scaling ventures,
  <MagicPage text={` Gantavya has worked in cross-functional teams as a core contributor, developing intuitive, user-centric digital experiences.`} />
  He is proficient in multiple languages,
  <MagicPage text={` including C/C++, Java, JavaScript, Python, SQL, and TypeScript, among others,`} />
  and utilizes modern technologies
  <MagicPage text={` such as AR/VR, n8n, WordPress, Express.js, Selenium, Postman, React.js, Next.js, and Nest.js.`} />
  His work spans across diverse sectors —
  <MagicPage text={` from B2C and B2B solutions to e-commerce, edtech, and AI-driven platforms.`} />
  These engagements have shaped his adaptability, sharpened his problem-solving skills, and fostered a strong agentic mindset.
              </p>

              <p className="text-gray-200">
  As a full-stack developer,
  <MagicPage text={` Gantavya transforms abstract problem statements into robust, scalable products by fusing computational logic with user-centered design principles.`} />
  His expertise includes frontend and backend development, database design, DevOps, cloud deployment, generative AI, and AI agent integration.
              </p>

              <p className="text-gray-200">
                One of his most notable projects is <strong className="text-fuchsia-400">merobraj.org</strong> —
  <MagicPage text={` a VR-powered platform that champions cultural tourism and socio-economic development in the Braj region.`}>
    <MagicPage text={` The platform was acquired in 2025 by one of his university professors for institutional expansion.`} />
  </MagicPage>
              </p>

              <p className="text-gray-200">
  Beyond development, Gantavya is active in the competitive programming and hackathon scene.
  <MagicPage text={` He has not only clinched top honors but also organized several technical events. Most notably, he ranked in the top 1% out of 2,500+ teams in the Odoo 36-hour Combat Hackathon.`}>
    <MagicPage text={` He continually engages with the broader tech community, advocating for peer learning and collaborative innovation.`} />
  </MagicPage>
              </p>

              <p className="text-gray-200">
  His curiosity also led him to ARIES —
  <MagicPage text={` the Aryabhatta Research Institute of Observational Sciences — where he explored AI applications in astronomical data analysis and predictive modeling.`} />
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className={`flex w-full transition-all justify-end duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-6 sm:justify-evenly">
              {actionButtons.map((button) => {
                const Icon = button.icon;
                return (
                  <a 
                    key={button.href}
                    href={button.href} 
                    download={button.label === "Resume"}
                    target={button.label !== "Resume" ? "_blank" : undefined}
                    rel={button.label !== "Resume" ? "noopener noreferrer" : undefined}
                    className="group"
                  >
                    <button 
                      type="button" 
                      className={`flex gap-2 items-center justify-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto ${button.color}`}
                    >
                      <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-sm sm:text-base">{button.label}</span>
                      {button.label !== "Resume" && (
                        <ExternalLink size={16} className="opacity-60 group-hover:opacity-100 self-center transition-opacity duration-300" />
                      )}
                    </button>
                  </a>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}