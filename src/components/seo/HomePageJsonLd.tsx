import JsonLd from './JsonLd';

const HomePageJsonLd = () => {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Darshan Parmar",
    jobTitle: "Software Developer",
    url: "https://darshan-parmar.vercel.app/",
    description: "Darshan Parmar is a software developer interested in React, Next.js, full-stack development, and open-source software.",
    sameAs: [
      "https://github.com/darshan02parmar",
      "https://linkedin.com/in/parmar-darshan",
      "https://twitter.com/darshan02parmar",
      "https://darshan-builds.hashnode.dev/",
      "https://gitroll.io/profile/uiFTdl9Q6LlQiYvD1CGbe8avuasm1",
    ],
    knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "full-stack development", "open-source software", "Three.js"],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://darshan-parmar.vercel.app/",
    "name": "Darshan Parmar | Software Developer",
    "description": "Full-stack developer building web applications with React, Next.js, TypeScript, Node.js, and Three.js."
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
          "text": "I specialize in React, Next.js, TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS, and Three.js for 3D web experiences."
        }
      },
      {
        "@type": "Question",
        "name": "Are you available for full-time roles or open-source projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I am actively open to full-stack developer roles, open-source collaborations, and freelance opportunities."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={personData} />
      <JsonLd data={websiteData} />
      <JsonLd data={faqData} />
    </>
  );
};

export default HomePageJsonLd;
