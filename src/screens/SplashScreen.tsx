import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { theme } from '../constants/theme';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

export const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const opacity = new Animated.Value(0);
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  useEffect(() => {
    if (!fontsLoaded) return;
    
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => onFinish());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.logo, { opacity }]}>
        Yams
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Pacifico_400Regular',
    fontSize: 48,
    color: theme.colors.accent,
  },
});
