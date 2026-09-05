import JsonLd from './JsonLd';

const OrganizationJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Darshan Parmar",
    "jobTitle": "Software Developer",
    "url": "https://darshan-parmar.vercel.app/",
    "sameAs": [
      "https://github.com/darshan02parmar",
      "https://linkedin.com/in/parmar-darshan",
      "https://twitter.com/darshan02parmar"
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
