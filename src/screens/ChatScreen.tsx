import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { theme } from '../constants/theme'

const MOCK_CHATS = {
  general: [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/100?u=sarah',
      lastMessage: 'What are you watching tonight?',
      timestamp: '5m ago',
      unread: 2,
    },
    // Add more mock chats...
  ],
  movies: [
    {
      id: '1',
      movieTitle: 'Inception',
      watchlistName: 'Movie Night Crew',
      posterUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      lastMessage: 'That ending though! 🤯',
      timestamp: '1h ago',
      unread: 1,
    },
    // Add more mock movie chats...
  ],
}

export const ChatScreen = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'movies'>('general')

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'general' && styles.activeTab]}
          onPress={() => setActiveTab('general')}
        >
          <Text style={[styles.tabText, activeTab === 'general' && styles.activeTabText]}>
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'movies' && styles.activeTab]}
          onPress={() => setActiveTab('movies')}
        >
          <Text style={[styles.tabText, activeTab === 'movies' && styles.activeTabText]}>
            Movie Chats
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'general' ? (
          MOCK_CHATS.general.map(chat => (
            <TouchableOpacity key={chat.id} style={styles.chatItem}>
              <Image source={{ uri: chat.avatar }} style={styles.avatar} />
              <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{chat.name}</Text>
                <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
              </View>
              <View style={styles.chatMeta}>
                <Text style={styles.timestamp}>{chat.timestamp}</Text>
                {chat.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadCount}>{chat.unread}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))
        ) : (
          MOCK_CHATS.movies.map(chat => (
            <TouchableOpacity key={chat.id} style={styles.chatItem}>
              <Image source={{ uri: chat.posterUrl }} style={styles.moviePoster} />
              <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{chat.movieTitle}</Text>
                <Text style={styles.watchlistName}>{chat.watchlistName}</Text>
                <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
              </View>
              <View style={styles.chatMeta}>
                <Text style={styles.timestamp}>{chat.timestamp}</Text>
                {chat.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadCount}>{chat.unread}</Text>
                  </View>
                )}
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
  },
  chatItem: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  moviePoster: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  chatInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  chatName: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  watchlistName: {
    color: theme.colors.secondary,
    fontSize: 12,
    marginTop: 2,
  },
  lastMessage: {
    color: theme.colors.text,
    opacity: 0.7,
    marginTop: 4,
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  timestamp: {
    color: theme.colors.text,
    opacity: 0.7,
    fontSize: 12,
  },
  unreadBadge: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  unreadCount: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
})

