import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // const state = {
    //     isDarkMode: true
    // }

    const [isDarkMode, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme((oldTheme) => !oldTheme);
    }
    return (
        <ThemeContext.Provider value={{
            isDarkMode,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}