import { useEffect, useState } from "react";

export const useDebounce = <T,>(value: T, delay: 1000) => {
    const [debouncedValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
};