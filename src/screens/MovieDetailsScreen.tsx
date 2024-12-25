import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { MessageCircle, Plus, Star } from 'lucide-react-native'
import { theme } from '../constants/theme'

interface MovieDetailsScreenProps {
  movie: {
    id: string
    title: string
    posterUrl: string
    genre: string
    rating: number
    year: string
    overview: string
  }
  onBack: () => void
}

export const MovieDetailsScreen = ({ movie, onBack }: MovieDetailsScreenProps) => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: movie.posterUrl }} 
        style={styles.poster}
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.metadata}>
          <Text style={styles.year}>{movie.year}</Text>
          <Text style={styles.genre}>{movie.genre}</Text>
          <Text style={styles.rating}>★ {movie.rating.toFixed(1)}</Text>
        </View>
        
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Plus color={theme.colors.primary} size={24} />
            <Text style={styles.actionText}>Add to List</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <MessageCircle color={theme.colors.primary} size={24} />
            <Text style={styles.actionText}>Chat</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Star color={theme.colors.primary} size={24} />
            <Text style={styles.actionText}>Rate</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  poster: {
    width: '100%',
    height: 500,
  },
  content: {
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  metadata: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  year: {
    color: theme.colors.text,
    opacity: 0.8,
  },
  genre: {
    color: theme.colors.secondary,
  },
  rating: {
    color: theme.colors.text,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: theme.spacing.xl,
  },
  actionButton: {
    backgroundColor: theme.colors.secondary,
    padding: theme.spacing.md,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 100,
  },
  actionText: {
    color: theme.colors.primary,
    marginTop: theme.spacing.xs,
    fontWeight: '600',
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  overview: {
    color: theme.colors.text,
    opacity: 0.8,
    lineHeight: 24,
  },
})

