

const Footer = () => {
    return (
        <footer className="py-8 text-center text-sm text-muted-foreground border-t mt-20">
            <p>© {new Date().getFullYear()} Darshan Parmar. All rights reserved.</p>
            <p className="mt-2">Built with Vite, React & Tailwind CSS.</p>
        </footer>
    );
};

export default Footer;
