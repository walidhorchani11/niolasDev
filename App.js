import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
const fetchFonts = () => {
  return Font.loadAsync({
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return <AppNavigator />;
}
