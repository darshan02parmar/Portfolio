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
        description: 'Wanderlust — an Airbnb-style vacation rental platform built with Node.js, Express, MongoDB, and Mapbox, featuring property listings, search, bookings, and user reviews.',
        oneLinePitch: 'A seamless platform to list, discover, and book unique stays worldwide.',
        longDescription: 'Wanderlust is a robust, full-stack application designed to emulate the core functionality of Airbnb. It provides a seamless platform for users to list, search, and book various types of accommodations, from cozy apartments to luxurious villas. Built with Node.js and Express backend, MongoDB for data persistence, and Mapbox for location services. The project focuses on creating a user-friendly interface coupled with a powerful backend to handle complex booking logic, secure authentication with Passport.js, and integrated maps for property discovery.',
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
        description: 'IdeaFlow — an AI-powered tool using Tambo AI to turn raw startup ideas into structured product briefs, user personas, roadmaps, and tech stack recommendations.',
        oneLinePitch: 'Transforming napkin sketches into comprehensive product roadmaps with AI.',
        longDescription: 'IdeaFlow is a cutting-edge generative tool designed for entrepreneurs and product managers. By leveraging Tambo AI and OpenAI, it takes a simple startup idea and transforms it into a comprehensive product blueprint. This includes detailed product briefs, user journey mappings, recommended tech stacks, MVP roadmaps, and preliminary business models. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for a dynamic generative UI that updates in real-time as the AI processes input, significantly accelerating the early stages of product development.',
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
    {
        id: 'investease',
        title: 'InvestEase',
        description: 'InvestEase — a MERN-stack investor self-service platform with real-time portfolio recalculation, KYC workflows, and admin verification, reaching the final round of a hackathon.',
        oneLinePitch: 'One secure platform for investors to manage portfolios, compliance, and account operations—backed by a powerful administrative workflow.',
        longDescription: 'Built a complete investor operations platform using React, Node.js, Express, and MongoDB Atlas that demonstrates secure JWT authentication, portfolio management, digital KYC, SIP workflows, nominee management, PDF statement generation, and role-based administrator operations. Features real-time portfolio calculations and modular three-tier MERN architecture with reusable service layers. InvestEase demonstrates how fragmented investor services can be unified into a secure, scalable, and user-friendly platform.',
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Tailwind CSS', 'PDFKit', 'Multer'],
        flowDiagram: ['Authentication', 'Investor Dashboard', 'Portfolio Operations', 'SIP Management', 'KYC & Nominees', 'Statements & Notifications', 'Admin Verification'],
        architecture: [
            { from: 'React Frontend', to: 'Express REST API' },
            { from: 'Express REST API', to: 'MongoDB Atlas' },
            { from: 'Node.js Engine', to: 'PDFKit Generation' }
        ],
        badges: [
            {
                src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
                alt: 'React',
            },
            {
                src: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
                alt: 'Node.js',
            },
            {
                src: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
                alt: 'MongoDB',
            },
            {
                src: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
                alt: 'Express.js',
            }
        ],
        deployedUrl: 'https://invest-ease-sand.vercel.app/',
        githubUrl: 'https://github.com/darshan02parmar/InvestEase',
        problemSolved: 'Modern investor services are often fragmented across multiple systems for portfolio management, KYC verification, nominee updates, account statements, and customer support, leading to inefficient workflows and inconsistent user experiences.',
        impact: 'Delivered a production-inspired MERN platform featuring secure authentication, dynamic portfolio operations, digital KYC workflows, PDF statement generation, and a role-based admin dashboard that streamlines investor and operational workflows.',
        difficulty: 'Designed a modular three-tier MERN architecture with reusable service layers, dynamic portfolio calculations, and secure JWT role-based authorization.',
    }
];

