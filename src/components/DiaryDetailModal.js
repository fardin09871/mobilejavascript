import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  COLORS,
  SPACE,
  RADIUS,
  TYPO,
} from '../styles/tokens';

export default function DiaryDetailModal({
  visible,
  onClose,
  entry,
}) {
  if (!entry) return null;

  const imageSource =
    typeof entry.moodUri === 'string'
      ? { uri: entry.moodUri }
      : entry.moodUri;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.heading}>
              Detail Diary
            </Text>

            <Pressable
              onPress={onClose}
              style={styles.closeButton}
              accessibilityRole="button"
              accessibilityLabel="Tutup detail diary"
            >
              <Text style={styles.closeText}>Tutup</Text>
            </Pressable>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.body}
          >
            {entry.moodUri ? (
              <Image
                source={imageSource}
                style={styles.image}
                resizeMode="cover"
                accessibilityLabel={`Mood ${entry.mood}`}
              />
            ) : null}

            <Text style={styles.title}>
              {entry.title}
            </Text>

            <Text style={styles.date}>
              {entry.date}
            </Text>

            <Text style={styles.moodText}>
              Mood: {entry.mood}
            </Text>

            <Text style={styles.content}>
              {entry.body}
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: SPACE.l,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },

  modal: {
    maxHeight: '85%',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.card,
    overflow: 'hidden',
  },

  header: {
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACE.l,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  heading: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
  },

  closeButton: {
    minHeight: 44,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACE.s,
  },

  closeText: {
    fontSize: TYPO.body,
    fontWeight: '600',
    color: COLORS.accent,
  },

  body: {
    padding: SPACE.l,
    gap: SPACE.m,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: RADIUS.avatar,
    backgroundColor: COLORS.accentLight,
  },

  title: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
  },

  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
  },

  moodText: {
    fontSize: TYPO.body,
    fontWeight: '600',
    color: COLORS.accent,
  },

  content: {
    fontSize: TYPO.body,
    lineHeight: 24,
    color: COLORS.text,
  },
});
