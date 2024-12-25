import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { theme } from '../constants/theme'
import { useNavigation } from '@react-navigation/native';

const MOCK_LISTS = {
  personal: [
    {
      id: '1',
      name: 'Sci-Fi Favorites',
      coverImage: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      movieCount: 12,
    },
    // Add more mock lists...
  ],
  shared: [
    {
      id: '1',
      name: 'Movie Night Crew',
      coverImage: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      members: ['John', 'Sarah', 'Mike'],
      movieCount: 8,
    },
    // Add more mock lists...
  ],
}

export const WatchlistsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<'personal' | 'shared'>('personal')

  const handleListPress = (listId: string) => {
    // Navigate to WatchlistDetailsScreen
    navigation.navigate('WatchlistDetails', { listId })
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'personal' && styles.activeTab]}
          onPress={() => setActiveTab('personal')}
        >
          <Text style={[styles.tabText, activeTab === 'personal' && styles.activeTabText]}>
            My Lists
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'shared' && styles.activeTab]}
          onPress={() => setActiveTab('shared')}
        >
          <Text style={[styles.tabText, activeTab === 'shared' && styles.activeTabText]}>
            Shared Lists
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'personal' ? (
          MOCK_LISTS.personal.map(list => (
            <TouchableOpacity key={list.id} style={styles.listCard} onPress={() => handleListPress(list.id)}>
              <Image source={{ uri: list.coverImage }} style={styles.coverImage} />
              <View style={styles.listInfo}>
                <Text style={styles.listName}>{list.name}</Text>
                <Text style={styles.movieCount}>{list.movieCount} movies</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          MOCK_LISTS.shared.map(list => (
            <TouchableOpacity key={list.id} style={styles.listCard} onPress={() => handleListPress(list.id)}>
              <Image source={{ uri: list.coverImage }} style={styles.coverImage} />
              <View style={styles.listInfo}>
                <Text style={styles.listName}>{list.name}</Text>
                <Text style={styles.movieCount}>
                  {list.movieCount} movies • {list.members.length} members
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  tabs: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: theme.spacing.sm,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondary,
  },
  tabText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  activeTabText: {
    color: theme.colors.secondary,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: theme.spacing.md,
  },
  listCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.inputBackground,
    borderRadius: 12,
    marginBottom: theme.spacing.md,
    overflow: 'hidden',
  },
  coverImage: {
    width: 80,
    height: 80,
  },
  listInfo: {
    flex: 1,
    padding: theme.spacing.md,
  },
  listName: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  movieCount: {
    color: theme.colors.text,
    opacity: 0.7,
    fontSize: 14,
  },
})

