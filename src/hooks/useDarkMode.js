import { useEffect } from 'react';


import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkmode] = useLocalStorage("dark", false)

    useEffect(() => {
        const body = window.document.body;
        darkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkmode];
};

export default useDarkMode;
