import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../constants/theme';
import { ChevronLeft } from 'lucide-react-native';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Auth: { mode: 'signup' | 'login' };
  Onboarding: undefined;
  Main: undefined;
};

interface AuthScreenProps {
  mode: 'signup' | 'login';
  onBack: () => void;
  onSuccess: () => void;
}

export const AuthScreen = ({ mode, onBack, onSuccess }: AuthScreenProps) => {
  const { signInWithGoogle, signInWithApple } = useAuth();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const isSignUp = mode === 'signup';

  const handleGooglePress = async () => {
    try {
      await signInWithGoogle();
      onSuccess();
    } catch (error) {
      console.error('Google sign in error:', error);
    }
  };

  const handleApplePress = async () => {
    try {
      await signInWithApple();
      onSuccess();
    } catch (error) {
      console.error('Apple sign in error:', error);
    }
  };

  const toggleAuthMode = () => {
    if (isSignUp) {
      navigation.navigate('Auth', { mode: 'login' });
    } else {
      navigation.navigate('Auth', { mode: 'signup' });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ChevronLeft color={theme.colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {isSignUp ? 'Complete Profile' : 'Login'}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          {isSignUp ? 'Create Your Account' : 'Hello again'}
        </Text>
        <Text style={styles.subtitle}>
          {isSignUp ? 'Use Yams on multiple devices and get the best experience.' : 'Welcome back to Yams'}
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleGooglePress}
          >
            <View style={styles.socialIconContainer}>
              <Text style={styles.socialIconFallback}>G</Text>
            </View>
            <Text style={styles.socialButtonText}>
              {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={handleApplePress}
          >
            <View style={styles.socialIconContainer}>
              <Text style={styles.socialIconFallback}>A</Text>
            </View>
            <Text style={styles.socialButtonText}>
              {isSignUp ? 'Sign up with Apple' : 'Sign in with Apple'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </Text>
          <TouchableOpacity onPress={toggleAuthMode}>
            <Text style={styles.footerLink}>
              {isSignUp ? 'Login here' : 'Sign up here'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backButton: {
    padding: theme.spacing.xs,
  },
  headerTitle: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: theme.spacing.md,
  },
  content: {
    flex: 1,
    padding: theme.spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.text,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  buttonContainer: {
    width: '100%',
    gap: theme.spacing.md,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.inputBackground,
    padding: theme.spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  socialIconContainer: {
    width: 24,
    height: 24,
    marginRight: theme.spacing.md,
    backgroundColor: theme.colors.accent,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIconFallback: {
    color: theme.colors.background,
    fontSize: 14,
    fontWeight: 'bold',
  },
  socialButtonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 'auto',
    gap: theme.spacing.xs,
  },
  footerText: {
    color: theme.colors.text,
    opacity: 0.8,
  },
  footerLink: {
    color: theme.colors.accent,
    fontWeight: '600',
  },
});

