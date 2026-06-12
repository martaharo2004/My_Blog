import { useState, useEffect } from "react";

import './IndexNav.css'

export const IndexNav = ({ indexNavItems = [] }) => {
    const [active, setActive] = useState(indexNavItems[0]?.id ?? null);

    useEffect(() => {
        setActive(indexNavItems[0]?.id ?? null);
    }, [indexNavItems]);

    const handleClick = (item) => {
        setActive(item.id);
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navIndev">
            <h2>En esta página:</h2>
            <ul className="nav-index-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {indexNavItems.map((item) => (
                    <li
                        key={item.id}
                        className={`nav-index-item ${active === item.id ? 'active' : ''}`}
                        onClick={() => handleClick(item)}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    );
};