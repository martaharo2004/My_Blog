import { useState, useEffect, useRef } from "react";

import './IndexNav.css'

export const IndexNav = ({ indexNavItems = [] }) => {
    const [active, setActive] = useState(indexNavItems[0]?.id ?? null);
    const isClickScrolling = useRef(false); // evita que el observer pelee con el scroll manual

    useEffect(() => {
        setActive(indexNavItems[0]?.id ?? null);
    }, [indexNavItems]);

    
    useEffect(() => {
        if (indexNavItems.length === 0) return;

        const header = document.querySelector('.header');
        const headerHeight = header?.offsetHeight ?? 0;

        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling.current) return;
                
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length > 0) {
                    setActive(visible[0].target.id);
                }
            },
            {
                rootMargin: `-${headerHeight + 8}px 0px -60% 0px`,
                threshold: 0,
            }
        );

        indexNavItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [indexNavItems]);

    const handleClick = (item) => {
        setActive(item.id);

        const el = document.getElementById(item.id);
        if (!el) return;

        const header = document.querySelector('.header');
        const headerHeight = header?.offsetHeight ?? 0;

        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

        isClickScrolling.current = true;
        window.scrollTo({ top, behavior: 'smooth' });
        window.clearTimeout(handleClick._timeout);
        handleClick._timeout = window.setTimeout(() => {
            isClickScrolling.current = false;
        }, 700);
    };

    return (
        <nav className="navIndev">
            <h2>En esta página:</h2>
            <ul className="nav-index-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {indexNavItems.map((item) => (
                    <li
                        key={item.id}
                        className={`nav-index-item ${active === item.id ? 'active' : ''} ${item.isGroup ? 'nav-index-group' : ''} ${item.isProject ? 'nav-index-project' : ''}`}
                        onClick={() => handleClick(item)}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
