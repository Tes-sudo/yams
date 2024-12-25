import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabNavigator } from './src/navigation/TabNavigator';
import { SplashScreen } from './src/screens/SplashScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { AuthScreen } from './src/screens/AuthScreen';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';

type RootStackParamList = {
  Auth: { mode: 'signup' | 'login' };
  Onboarding: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const { user, loading } = useAuth();

  if (showSplash || loading) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen
              name="Auth"
              component={({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'Auth'>) => (
                <AuthScreen
                  mode={route.params?.mode || 'signup'}
                  onBack={() => navigation.navigate('Onboarding')}
                  onSuccess={() => {}}
                />
              )}
            />
          </>
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
