import {createContext} from 'react';

export const themes = {
    light: {
        background: "#eee",
        text: "#000"
    },
    dark: {
        background: "#444343",
        text: "#eee"
    }
}

export const ThemeContext = createContext({ themes: themes.light, toggleTheme: () => {} });