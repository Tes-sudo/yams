import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Heart, MessageCircle, Camera, Image as ImageIcon } from 'lucide-react-native'
import { theme } from '../constants/theme'

const MOCK_POSTS = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/100?u=john',
    },
    movie: {
      title: 'The Dark Knight',
      posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    },
    caption: 'Movie night! 🍿',
    timestamp: '2h ago',
    likes: 12,
    comments: 3,
  },
  // Add more mock posts...
]

export const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.createButton}>
          <Camera color={theme.colors.primary} size={24} />
          <Text style={styles.createButtonText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton}>
          <ImageIcon color={theme.colors.primary} size={24} />
          <Text style={styles.createButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {MOCK_POSTS.map(post => (
          <View key={post.id} style={styles.post}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.userName}>{post.user.name}</Text>
                <Text style={styles.timestamp}>{post.timestamp}</Text>
              </View>
            </View>

            <Image source={{ uri: post.movie.posterUrl }} style={styles.moviePoster} />
            
            <View style={styles.postContent}>
              <Text style={styles.movieTitle}>{post.movie.title}</Text>
              <Text style={styles.caption}>{post.caption}</Text>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionButton}>
                <Heart color={theme.colors.text} size={20} />
                <Text style={styles.actionText}>{post.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <MessageCircle color={theme.colors.text} size={20} />
                <Text style={styles.actionText}>{post.comments}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  header: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
  createButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary,
    padding: theme.spacing.md,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
  },
  createButtonText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  post: {
    backgroundColor: theme.colors.inputBackground,
    marginBottom: theme.spacing.md,
  },
  postHeader: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userName: {
    color: theme.colors.text,
    fontWeight: '600',
  },
  timestamp: {
    color: theme.colors.text,
    opacity: 0.7,
    fontSize: 12,
  },
  moviePoster: {
    width: '100%',
    height: 300,
  },
  postContent: {
    padding: theme.spacing.md,
  },
  movieTitle: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  caption: {
    color: theme.colors.text,
    opacity: 0.9,
  },
  actions: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.lg,
    gap: theme.spacing.xs,
  },
  actionText: {
    color: theme.colors.text,
  },
})

