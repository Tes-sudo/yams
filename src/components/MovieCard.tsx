import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { theme } from '../constants/theme'

interface MovieCardProps {
  id: string
  title: string
  posterUrl: string
  genre: string
  rating: number
  onPress: (id: string) => void
}

export const MovieCard = ({ id, title, posterUrl, genre, rating, onPress }: MovieCardProps) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onPress(id)}
    >
      <Image 
        source={{ uri: posterUrl }} 
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <View style={styles.details}>
          <Text style={styles.genre}>{genre}</Text>
          <Text style={styles.rating}>★ {rating.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const { width } = Dimensions.get('window')
const cardWidth = (width - 48) / 2

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: cardWidth * 1.5,
    borderRadius: 12,
    marginBottom: theme.spacing.md,
    overflow: 'hidden',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  title: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genre: {
    color: theme.colors.secondary,
    fontSize: 12,
  },
  rating: {
    color: theme.colors.text,
    fontSize: 12,
  },
})

