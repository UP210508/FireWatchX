import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

import '../global.css';

export default function RootLayout() {

  const [ fontsLoaded, error ] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  })

  useEffect(() => {
    if ( error ) throw error;
    if ( fontsLoaded ) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if ( !fontsLoaded && !error ) return null;

  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  )

}
