import { createContext, useCallback, useContext, useState } from "react";

const darkTheme = 'dark';
const lightTheme = 'light';

export type ThemeContextType = {
    theme: string;
    toggleTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: darkTheme, toggleTheme: () => {} });

export function useTheme(defaultTheme = darkTheme) {
    const [theme, setTheme] = useState(defaultTheme);
    const toggleTheme = useCallback(() => setTheme((currentTheme) =>  currentTheme === darkTheme ? lightTheme : darkTheme), [theme]);

    return { theme, toggleTheme }
}

export function useCurrentTheme() {
    return useContext(ThemeContext);
}