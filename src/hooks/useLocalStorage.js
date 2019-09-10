import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    // const item = JSON.parse(window.localStorage.getItem(key));

    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });
    return [storedValue];

}