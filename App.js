import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';
import ThemeContext from './hooks/themeContext';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './components/Home';
import { darkTheme, lightTheme } from './utils/theme';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const changeThemeListener = EventRegister.addEventListener('ChangeTheme', (value) => {
      setIsDarkMode(value);
    });

    return () => {
      EventRegister.removeEventListener(changeThemeListener);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: isDarkMode ? darkTheme : lightTheme }}>
        <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
          </Tab.Navigator>
        </NavigationContainer>
    </ThemeContext.Provider>
  );
}
