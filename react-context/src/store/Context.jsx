import React, { useState } from "react";

export const ThemeContext = React.createContext('light')

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('')
    function ToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}