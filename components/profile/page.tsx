'use client'
import MagicPage from "../magic/page";

import { FileBadge, Instagram } from "lucide-react";
export default function Profile() {
  return (
    <div className="flex w-[95%] mx-auto flex-col items-start justify-around p-2 sm:p-2 font-[family-name:var(--font-geist-sans)]">

      <h1 id="whoami" className="mx-auto text-4xl p-2 mb-2 text-fuchsia-600 rounded bg-stone-900/50 font-bold">{`>>> whoami`}</h1>
      <p className="text-lg text-justify bg-stone-900/50">

  Gantavya Bansal is a passionate Computer Science engineering undergrad (Class of 2027),
  <MagicPage text={` currently pursuing his B.Tech in CSE at GLA University. `} />
  His journey into tech began in 2020, when he started monetizing his skills as a teenager —
  <MagicPage text={` launching his career through content creation rooted in personal interests. He soon transitioned into freelancing as a social media manager, orchestrating marketing campaigns and ad strategies before pivoting into web development.`}>
    <MagicPage text={` Outside of tech, he finds joy in cooking, exploring the outdoors, and capturing life through photography.`} />
  </MagicPage>
  
  Currently, Gantavya serves as a Coding Mentor,
  <MagicPage text={` at Let's Unbound, where he guides students in foundational and advanced programming concepts.`} />
  On campus, he leads the Editorial team of the University Alumni Association,
  <MagicPage text={` curating impactful content strategies that boost alumni engagement and foster community ties.`} />
  He is also building <strong>OurVansh</strong> —
  <MagicPage text={` a digital platform designed to reconnect families with their roots by mapping relationships and preserving ancestral heritage.`} />

  <br /><br />

  With hands-on experience at both startups and fast-scaling ventures,
  <MagicPage text={` Gantavya has worked in cross-functional teams as a core contributor, developing intuitive, user-centric digital experiences.`} />
  He is proficient in multiple languages,
  <MagicPage text={` including C/C++, Java, JavaScript, Python, SQL, and TypeScript, among others,`} />
  and utilizes modern technologies
  <MagicPage text={` such as AR/VR, n8n, WordPress, Express.js, Selenium, Postman, React.js, Next.js, and Nest.js.`} />
  His work spans across diverse sectors —
  <MagicPage text={` from B2C and B2B solutions to e-commerce, edtech, and AI-driven platforms.`} />
  These engagements have shaped his adaptability, sharpened his problem-solving skills, and fostered a strong agentic mindset.

  <br /><br />

  As a full-stack developer,
  <MagicPage text={` Gantavya transforms abstract problem statements into robust, scalable products by fusing computational logic with user-centered design principles.`} />
  His expertise includes frontend and backend development, database design, DevOps, cloud deployment, generative AI, and AI agent integration.

  One of his most notable projects is <strong>merobraj.org</strong> —
  <MagicPage text={` a VR-powered platform that champions cultural tourism and socio-economic development in the Braj region.`}>
    <MagicPage text={` The platform was acquired in 2025 by one of his university professors for institutional expansion.`} />
  </MagicPage>

  Beyond development, Gantavya is active in the competitive programming and hackathon scene.
  <MagicPage text={` He has not only clinched top honors but also organized several technical events. Most notably, he ranked in the top 1% out of 2,500+ teams in the Odoo 36-hour Combat Hackathon.`}>
    <MagicPage text={` He continually engages with the broader tech community, advocating for peer learning and collaborative innovation.`} />
  </MagicPage>

  His curiosity also led him to ARIES —
  <MagicPage text={` the Aryabhatta Research Institute of Observational Sciences — where he explored AI applications in astronomical data analysis and predictive modeling.`} />

</p>

      <div className="text-xl flex flex-col sm:flex-row pt-5 sm:gap-0 gap-2 w-full justify-between">

        <a href="/gantavya_bansal_resume.pdf" download target="blank">

          <button type="button" className=" px-2 py-2 bg-fuchsia-700 sm:bg-transparent sm:underline w-full text-white rounded">
            <FileBadge className="inline mr-2" />
            Resume
          </button>
        </a>

        <a href="https://leetcode.com/u/bgantavya" target="blank">
          <button type="button" className="block px-2 py-2 bg-fuchsia-700 sm:bg-transparent sm:underline w-full text-white rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 inline mr-2 text-white" viewBox="0 0 24 24" id="leetcode">
              <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z" fill="white"></path>
              <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z" fill="white"></path>
            </svg>
            LeetCode
          </button>
        </a>
        <a href="https://www.hackerrank.com/profile/gantavya_bansal1" target="blank">
          <button type="button" className="block px-2 py-2 bg-fuchsia-700 sm:bg-transparent sm:underline w-full text-white rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 inline mr-2 text-white fill-white" viewBox="0 0 24 24" id="hackerrank">
              <path d="M11.999,24c-1.56,0-9.643-4.654-10.42-6C0.805,16.659,0.804,7.352,1.578,6.002C2.351,4.656,10.434,0,11.999,0c1.553,0,9.635,4.652,10.419,5.997c0.783,1.343,0.784,10.655,0.001,12.004C21.639,19.347,13.556,24,11.999,24z M11.999,1.5c-1.176,0.092-8.486,4.3-9.124,5.254c-0.501,1.021-0.501,9.472,0.007,10.501c0.633,0.943,7.973,5.168,9.125,5.244c1.134-0.076,8.476-4.302,9.119-5.258c0.5-1.018,0.501-9.465-0.008-10.497C20.48,5.805,13.169,1.593,11.999,1.5z"></path>
              <path d="M14.507,12.75H9.491c-0.202,0-0.396-0.082-0.536-0.226c-0.142-0.145-0.219-0.339-0.214-0.542c0.009-0.385,0.011-0.938,0.013-1.549c0.003-1.36,0.008-2.901,0.088-3.754c0.039-0.412,0.409-0.72,0.817-0.676c0.413,0.039,0.716,0.405,0.677,0.817c-0.074,0.784-0.079,2.355-0.082,3.617c-0.001,0.287-0.002,0.562-0.004,0.812h3.509c-0.002-1.158-0.021-2.325-0.06-3.476C13.687,7.36,14.011,7.014,14.425,7c0.419-0.026,0.761,0.312,0.774,0.725c0.045,1.382,0.064,2.786,0.058,4.172V12C15.257,12.414,14.921,12.75,14.507,12.75z"></path>
              <path d="M14.494,18c-0.414,0-0.75-0.336-0.75-0.75c0-1.235,0.028-2.959,0.045-3.794c-0.007-0.09-0.021-0.256-0.027-0.706l-3.521,0.021c-0.004,1.143-0.006,2.046,0.064,3.441c0.021,0.414-0.298,0.766-0.711,0.787c-0.419,0.017-0.767-0.298-0.787-0.711c-0.072-1.436-0.07-2.402-0.066-3.521L8.741,12c0-0.414,0.336-0.75,0.75-0.75h5.016c0.414,0,0.75,0.336,0.75,0.75c0,0.964,0.019,1.227,0.026,1.338c0.002,0.023,0.006,0.125,0.006,0.148c-0.017,0.828-0.045,2.539-0.045,3.764C15.244,17.664,14.908,18,14.494,18z"></path>
              <path d="M14.505 19.998c-.771 0-2.346-2.133-2.442-2.381-.113-.291-.039-.687.193-.895l0 0c.358-.302 4.152-.306 4.489-.002.23.208.306.603.193.893-.096.248-1.658 2.385-2.429 2.385C14.509 19.998 14.507 19.998 14.505 19.998zM14.25 18.001c.089.095.176.186.256.268.08-.082.166-.173.254-.268C14.592 18 14.418 18 14.25 18.001zM12.758 17.278h.01H12.758zM9.479 7.507c-1.031 0-2.056-.075-2.224-.227-.23-.208-.306-.603-.193-.893C7.157 6.14 8.72 4.002 9.49 4.002c.001 0 .003 0 .005 0 .771 0 2.346 2.133 2.442 2.381.113.291.039.687-.193.895l0 0C11.564 7.43 10.518 7.507 9.479 7.507zM11.208 6.727h.01H11.208zM9.24 6c.168 0 .34 0 .51 0C9.661 5.904 9.574 5.813 9.494 5.731 9.414 5.813 9.328 5.904 9.24 6z"></path>
            </svg>
            HackerRank
          </button>
        </a>
        <a href="https://instagram.com/bgantavya" target="blank">
          <button type="button" className="block px-2 py-2 bg-fuchsia-700 sm:bg-transparent sm:underline w-full text-white rounded">
            <Instagram className="inline mr-2" />
            Instagram
          </button>
        </a>
      </div>
      {/* <video src="intro.mp4" controls autoPlay loop muted className="rounded mx-auto max-w-xl mt-4"></video> */}
    </div>
  );
}