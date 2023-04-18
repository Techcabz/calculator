import React, { useContext, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import ThemeContext from '../hooks/themeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleSwitch = (value) => {
    setDarkMode(value);
    EventRegister.emit('ChangeTheme', value);
  };

  // console.log(theme)

  return (
    <View style={[styles.container, theme.headlineMedium]}>
      <Text style={[styles.text, { color: theme.colors.text }]}>Home Screen</Text>
      <Switch
        value={darkMode}
        onValueChange={handleToggleSwitch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },

});

export default Home;
