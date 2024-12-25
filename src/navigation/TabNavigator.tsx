import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Film, List, Activity, MessageCircle } from 'lucide-react-native'
import { theme } from '../constants/theme'
import { DiscoverScreen } from '../screens/DiscoverScreen'
import { WatchlistsScreen } from '../screens/WatchlistsScreen'
import { ActivityScreen } from '../screens/ActivityScreen'
import { ChatScreen } from '../screens/ChatScreen'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderTopColor: theme.colors.border,
        },
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.text,
      }}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color }) => <Film color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Watchlists"
        component={WatchlistsScreen}
        options={{
          tabBarIcon: ({ color }) => <List color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ color }) => <Activity color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color }) => <MessageCircle color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  )
}

