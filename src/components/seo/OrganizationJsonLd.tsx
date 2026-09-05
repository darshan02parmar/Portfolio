import JsonLd from './JsonLd';

const OrganizationJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Darshan Parmar",
    "jobTitle": "Software Developer",
    "url": "https://darshan-parmar.vercel.app/",
    "description": "Darshan Parmar is a software developer interested in React, Next.js, full-stack development, and open-source software.",
    "sameAs": [
      "https://github.com/darshan02parmar",
      "https://linkedin.com/in/parmar-darshan",
      "https://twitter.com/darshan02parmar",
      "https://darshan-builds.hashnode.dev/"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Three.js",
      "Tailwind CSS"
    ]
  };

  return <JsonLd data={data} />;
};

export default OrganizationJsonLd;
