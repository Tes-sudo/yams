import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { MovieCard } from './MovieCard'
import { theme } from '../constants/theme'

interface Movie {
  id: string
  title: string
  posterUrl: string
  genre: string
  rating: number
}

interface HorizontalMovieListProps {
  title: string
  movies: Movie[]
  onMoviePress: (id: string) => void
}

export const HorizontalMovieList = ({ title, movies, onMoviePress }: HorizontalMovieListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {movies.map(movie => (
          <View key={movie.id} style={styles.cardContainer}>
            <MovieCard {...movie} onPress={onMoviePress} />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.lg,
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  scrollContent: {
    paddingHorizontal: theme.spacing.lg,
  },
  cardContainer: {
    marginRight: theme.spacing.md,
  },
})

