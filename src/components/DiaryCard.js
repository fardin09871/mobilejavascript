
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

import {
  COLORS,
  SPACE,
  RADIUS,
  TYPO,
} from '../styles/tokens';

export default function DiaryCard({
  title,
  date,
  preview,
  moodUri,
  onPress,
  variant = 'list',
}) {
  const imageSource =
    typeof moodUri === 'string'
      ? { uri: moodUri }
      : moodUri;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        variant === 'grid' && styles.cardGrid,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Buka diary ${title}, tanggal ${date}`}
      accessibilityHint="Ketuk untuk membaca catatan lengkap"
    >
      {moodUri ? (
        <Image
          source={imageSource}
          style={styles.mood}
          resizeMode="cover"
          accessibilityLabel={`Mood untuk ${title}`}
        />
      ) : (
        <View
          style={styles.mood}
          accessible={false}
        />
      )}

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.date}>
          {date}
        </Text>

        <Text style={styles.preview} numberOfLines={3}>
          {preview}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACE.m,
    padding: SPACE.m,
    minHeight: 100,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
  },

  cardGrid: {
    flexDirection: 'column',
    height: '100%',
  },

  pressed: {
    opacity: 0.75,
  },

  mood: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: COLORS.accentLight,
  },

  content: {
    flex: 1,
    gap: SPACE.xs,
  },

  title: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
  },

  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
  },

  preview: {
    fontSize: TYPO.body,
    lineHeight: 20,
    color: COLORS.text,
  },
});
