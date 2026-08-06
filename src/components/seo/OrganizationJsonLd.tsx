import JsonLd from './JsonLd';

const OrganizationJsonLd = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Darshan Parmar",
    "jobTitle": "Software Developer|Fullstack Web Developer",
    "url": "https://darshan-parmar.vercel.app/",
    "sameAs": [
      "https://github.com/darshan02parmar",
      "https://linkedin.com/in/darshanparmar"
    ],
    "knowsAbout": ["React", "Node.js", "Express.js", "MongoDB", "Three.js", "Tailwind CSS", "TypeScript"]
  };

  return <JsonLd data={data} />;
};

export default OrganizationJsonLd;
