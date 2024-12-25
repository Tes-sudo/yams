import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { theme } from '../constants/theme';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Auth: { mode: 'signup' | 'login' };
  Onboarding: undefined;
  Main: undefined;
};

const ONBOARDING_DATA = [
  {
    title: "Your Next Movie Night Starts Here",
    description: "Create collaborative watchlists, share your favorite picks, and finally agree on what to stream next with your friends."
  },
  {
    title: "Curate Movie Magic with Your Friends",
    description: "Discover, discuss, and decide on your next movie night, all in one place. Build personalized lists with your friends."
  }
];

export const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const isLastScreen = currentIndex === ONBOARDING_DATA.length - 1;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.5)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      })
    ]).start();

    return () => {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.5);
    };
  }, [currentIndex]);

  const handleNext = () => {
    if (isLastScreen) {
      navigation.navigate('Auth', { mode: 'signup' });
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <Text style={styles.logo}>Yams</Text>
        <Text style={styles.title}>{ONBOARDING_DATA[currentIndex].title}</Text>
        <Text style={styles.description}>{ONBOARDING_DATA[currentIndex].description}</Text>
      </Animated.View>

      <View style={styles.footer}>
        <View style={styles.dots}>
          {ONBOARDING_DATA.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.activeDot
              ]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
        >
          <Text style={styles.buttonText}>
            {isLastScreen ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between',
    padding: theme.spacing.xl,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Pacifico_400Regular',
    fontSize: 48,
    color: theme.colors.accent,
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  description: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    opacity: 0.8,
    lineHeight: 24,
  },
  footer: {
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    marginBottom: theme.spacing.lg,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.border,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: theme.colors.accent,
    width: 20,
  },
  button: {
    backgroundColor: theme.colors.accent,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
});

