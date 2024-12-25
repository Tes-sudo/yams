import React from 'react'
import { View, StyleSheet, ScrollView, TextInput } from 'react-native'
import { Search } from 'lucide-react-native'
import { theme } from '../constants/theme'
import { HorizontalMovieList } from '../components/HorizontalMovieList'

const MOCK_MOVIES = [
  {
    id: '1',
    title: 'The Dark Knight',
    posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    genre: 'Action',
    rating: 4.8,
  },
  // Add more mock movies...
]

export const DiscoverScreen = () => {
  const handleMoviePress = (id: string) => {
    console.log('Movie pressed:', id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search color={theme.colors.text} size={20} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies..."
          placeholderTextColor={theme.colors.text}
        />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <HorizontalMovieList
          title="Trending Now"
          movies={MOCK_MOVIES}
          onMoviePress={handleMoviePress}
        />
        <HorizontalMovieList
          title="Action"
          movies={MOCK_MOVIES}
          onMoviePress={handleMoviePress}
        />
        <HorizontalMovieList
          title="Comedy"
          movies={MOCK_MOVIES}
          onMoviePress={handleMoviePress}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: theme.spacing.lg,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    color: theme.colors.text,
    fontSize: 16,
  },
})

