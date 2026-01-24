'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSComponent({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        AOS.init({
            once: false, // Scroll animations every time
            mirror: false, // Stick to one-way animation if desired
        });
    }, []);

    return <>{children}</>;
}
