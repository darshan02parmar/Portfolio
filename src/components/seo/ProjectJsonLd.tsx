import JsonLd from './JsonLd';

interface ProjectJsonLdProps {
  project: {
    id: string;
    title: string;
    description: string;
    deployedUrl?: string;
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
    "url": `https://darshan-parmar.vercel.app/project/${project.id}`,
    "sameAs": project.deployedUrl ? [project.deployedUrl] : [],
    "author": {
      "@type": "Person",
      "name": "Darshan Parmar",
      "url": "https://darshan-parmar.vercel.app/"
    }
  };

  return <JsonLd data={data} />;
};

export default ProjectJsonLd;
