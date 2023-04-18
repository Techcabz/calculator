import { createContext } from 'react';

const ThemeContext = createContext({

    darkmode: false,
    toggleDarkmode: () => { },
    themeColors: {},
});

export default ThemeContext;