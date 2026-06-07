export interface Project {
    id: string;
    title: string;
    description: string;
    oneLinePitch: string;
    longDescription: string;
    techStack: string[];
    badges: { src: string; alt: string }[];
    deployedUrl?: string;
    githubUrl?: string;
    isComingSoon?: boolean;
    problemSolved: string;
    impact: string;
    difficulty: string;
    flowDiagram: string[];
    architecture: { from: string; to: string }[];
}

export const projects: Project[] = [
    {
        id: 'wanderlust',
        title: 'Wanderlust',
        description: 'A full-stack vacation rental platform similar to Airbnb.',
        oneLinePitch: 'A seamless platform to list, discover, and book unique stays worldwide.',
        longDescription: 'Wanderlust is a robust, full-stack application designed to emulate the core functionality of Airbnb. It provides a seamless platform for users to list, search, and book various types of accommodations, from cozy apartments to luxurious villas. The project focuses on creating a user-friendly interface coupled with a powerful backend to handle complex booking logic and data management.',
        techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'EJS', 'Passport.js', 'Mapbox'],
        flowDiagram: ['Property Listing', 'Search & Filter', 'Booking Engine', 'Review System'],
        architecture: [
            { from: 'EJS/React UI', to: 'Express Server' },
            { from: 'Express Server', to: 'MongoDB (Mongoose)' },
            { from: 'Mapbox API', to: 'UI layer' }
        ],
        badges: [
            {
                src: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
                alt: 'MongoDB',
            },
            {
                src: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
                alt: 'Express.js',
            },
            {
                src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
                alt: 'React',
            },
            {
                src: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
                alt: 'NodeJS',
            },
        ],
        deployedUrl: 'https://wanderlust-750d.onrender.com/',
        githubUrl: 'https://github.com/darshan02parmar/wanderlust',
        problemSolved: 'Bridging the gap between property owners and travelers by providing a reliable and intuitive platform for Discovering and listing accommodations with secure authentication and integrated maps.',
        impact: 'Created a highly functional clone that demonstrates a deep understanding of the MERN stack architecture, handling over 20+ property listings with dynamic map integration and secure user reviews.',
        difficulty: 'Implementing complex server-side validation using Joi and managing complex state across the frontend while integrating third-party APIs like Mapbox for location services.',
    },
    {
        id: 'ideaflow',
        title: 'IdeaFlow',
        description: 'AI-powered Generative UI tool that converts startup ideas into structured product blueprints.',
        oneLinePitch: 'Transforming napkin sketches into comprehensive product roadmaps with AI.',
        longDescription: 'IdeaFlow is a cutting-edge generative tool designed for entrepreneurs and product managers. By leveraging advanced AI models, it takes a simple startup idea and transforms it into a comprehensive product blueprint. This includes detailed product briefs, user journey mappings, recommended tech stacks, MVP roadmaps, and even preliminary business models, significantly accelerating the early stages of product development.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API/Tambo AI', 'Framer Motion'],
        flowDiagram: ['User Idea', 'AI Processing', 'Structured Blueprint', 'Export Roadmap'],
        architecture: [
            { from: 'Next.js UI', to: 'API Routes' },
            { from: 'API Routes', to: 'OpenAI / Tambo' },
            { from: 'AI Output', to: 'Generative UI' }
        ],
        badges: [
            {
                src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
                alt: 'React',
            },
            {
                src: 'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white',
                alt: 'Vite',
            },
            {
                src: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
                alt: 'TailwindCSS',
            },
            {
                src: 'https://img.shields.io/badge/Tambo-AI-orange?style=for-the-badge',
                alt: 'Tambo AI',
            },
        ],
        deployedUrl: 'https://ideaflow-product-ai.vercel.app/',
        githubUrl: 'https://github.com/darshan02parmar/ideaflow',
        problemSolved: 'Overcoming the "blank page" problem for new startup founders by automating the initial research and documentation phase using Generative AI.',
        impact: 'Reduces the time taken to create a professional product brief from days to seconds, allowing founders to validate and iterate on their ideas much faster.',
        difficulty: 'Designing a dynamic Generative UI that updates in real-time as the AI processes the input, and ensuring the AI provides structured, actionable blueprints across different industries.',
    },
];

