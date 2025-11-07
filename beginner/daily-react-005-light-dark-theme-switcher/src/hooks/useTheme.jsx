import { useState, useEffect } from 'react';

export default function useTheme() {
    const [isLightMode, setIsLightMode] = useState(() => {
        const savedTheme = JSON.parse(localStorage.getItem('themePreference'));
        return savedTheme !== null ? savedTheme : true;
        // for more polished UI and UX approach, remove the return above and change it with this, that looks at the user settings preference
        if (savedTheme !== null) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: light)').matches;
    });

    const handleClick = () => {
        setIsLightMode((prev) => !prev);
    };

    useEffect(() => {
        localStorage.setItem('themePreference', JSON.stringify(isLightMode));
    }, [isLightMode]);

    return { isLightMode, handleClick }
}