import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function DiaryCard({
  title,
  date,
  preview,
  moodUri,
  mood = 'neutral',
}) {
  const moodColors = {
    happy: '#22c55e',
    sedih: '#60a5fa',
    angry: '#ef4444',
    calm: '#a78bfa',
    neutral: '#e5e7eb',
  };

  return (
    <View
      style={[
        styles.card,
        {
          borderColor:
            moodColors[mood] || moodColors.neutral,
        },
      ]}
    >
      <Image
        source={moodUri}
        style={styles.mood}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.date}>
          {date}
        </Text>

        <Text style={styles.preview}>
          {preview}
        </Text>

        <Text style={styles.moodLabel}>
          Mood: {mood}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },

  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },

  preview: {
    fontSize: 14,
    color: '#374151',
  },

  moodLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
    color: '#6b7280',
    textTransform: 'capitalize',
  },
});