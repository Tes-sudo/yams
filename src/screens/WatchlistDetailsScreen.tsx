import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { MessageCircle } from 'lucide-react-native'
import { theme } from '../constants/theme'
import { MovieCard } from '../components/MovieCard'

interface WatchlistDetailsScreenProps {
  watchlist: {
    id: string
    name: string
    isShared: boolean
    members?: {
      id: string
      name: string
      avatar: string
    }[]
    movies: {
      id: string
      title: string
      posterUrl: string
      genre: string
      rating: number
      addedBy?: string
    }[]
  }
  onMoviePress: (movieId: string) => void
  onChatPress: () => void
}

export const WatchlistDetailsScreen = ({ 
  watchlist,
  onMoviePress,
  onChatPress
}: WatchlistDetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{watchlist.name}</Text>
          {watchlist.isShared && (
            <TouchableOpacity 
              style={styles.chatButton}
              onPress={onChatPress}
            >
              <MessageCircle color={theme.colors.primary} size={20} />
              <Text style={styles.chatButtonText}>Chat</Text>
            </TouchableOpacity>
          )}
        </View>

        {watchlist.isShared && watchlist.members && (
          <View style={styles.membersContainer}>
            <Text style={styles.membersTitle}>Members</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.membersScroll}
            >
              {watchlist.members.map(member => (
                <View key={member.id} style={styles.memberItem}>
                  <Image 
                    source={{ uri: member.avatar }} 
                    style={styles.memberAvatar} 
                  />
                  <Text style={styles.memberName}>{member.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.moviesGrid}
      >
        {watchlist.movies.map(movie => (
          <View key={movie.id} style={styles.movieContainer}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              genre={movie.genre}
              rating={movie.rating}
              onPress={onMoviePress}
            />
            {movie.addedBy && (
              <Text style={styles.addedBy}>Added by {movie.addedBy}</Text>
            )}
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
    padding: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: 20,
    gap: theme.spacing.xs,
  },
  chatButtonText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  membersContainer: {
    marginTop: theme.spacing.md,
  },
  membersTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  membersScroll: {
    paddingRight: theme.spacing.lg,
  },
  memberItem: {
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  memberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: theme.spacing.xs,
  },
  memberName: {
    color: theme.colors.text,
    fontSize: 12,
  },
  content: {
    flex: 1,
  },
  moviesGrid: {
    padding: theme.spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  movieContainer: {
    width: '48%',
    marginBottom: theme.spacing.md,
  },
  addedBy: {
    color: theme.colors.text,
    opacity: 0.7,
    fontSize: 12,
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },
})

