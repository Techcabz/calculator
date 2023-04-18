
import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        primary: 'blue', 
        background: 'white',
        card: 'lightgray', 
        text: 'black',
        border: 'gray',
    },
};

export const darkTheme = {
    ...DefaultTheme,
    colors: {
        primary: 'blue',
        background: '#333',
        card: 'darkgray',
        text: 'white',
        border: 'gray',
    },
};