import JsonLd from './JsonLd';

interface ProjectJsonLdProps {
  project: {
    title: string;
    description: string;
    url?: string;
  };
}

const ProjectJsonLd = ({ project }: ProjectJsonLdProps) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.description,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web",
    "url": project.url || "https://darshan-parmar.vercel.app/",
    "author": {
      "@type": "Person",
      "name": "Darshan Parmar"
    }
  };

  return <JsonLd data={data} />;
};

export default ProjectJsonLd;
