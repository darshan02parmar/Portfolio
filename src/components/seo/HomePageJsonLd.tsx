import JsonLd from './JsonLd';

const HomePageJsonLd = () => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://darshan-parmar.vercel.app/",
    "name": "Darshan Parmar | Fullstack Developer",
    "description": "Professional Fullstack Web Developer specializing in MERN stack and 3D web experiences."
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is your main technology stack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js), along with TypeScript, Tailwind CSS, and Three.js for interactive 3D experiences."
        }
      },
      {
        "@type": "Question",
        "name": "Are you available for freelance work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I am open to freelance opportunities and full-time roles as a full-stack developer."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={websiteData} />
      <JsonLd data={faqData} />
    </>
  );
};

export default HomePageJsonLd;
