import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import DiaryCard from '../components/DiaryCard';

import happy from '../../assets/moods/happy.png';
import mad from '../../assets/moods/mad.png';
import smile from '../../assets/moods/smile.png';
import sedih from '../../assets/moods/sedih.png';
const avatar = require('../../assets/moods/smile.png');

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2026-10-12',
    preview:
      'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodUri: happy,
    mood: 'calm',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2026-10-11',
    preview:
      'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodUri: mad,
    mood: 'angry',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2026-10-10',
    preview:
      'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodUri: smile,
    mood: 'happy',
  },
  {
    id: 4,
    title: 'Belajar Hal Baru',
    date: '2026-10-09',
    preview:
      'Hari ini aku belajar hal baru dalam pemrograman. Walaupun sulit, aku tetap mencoba.',
    moodUri: smile,
    mood: 'happy',
  },
  {
    id: 5,
    title: 'Hari yang Melelahkan',
    date: '2026-10-08',
    preview:
      'Banyak kegiatan hari ini. Saatnya beristirahat dan menyiapkan diri untuk esok.',
    moodUri: sedih,
    mood: 'sad',
  },
];

export default function DiaryListScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.greeting}>
              PERSONAL DIARY
            </Text>
            <Text style={styles.header}>
              Buku Harian
            </Text>
            <Text style={styles.subtitle}>
              Ceritakan harimu di sini.
            </Text>
          </View>

          <Image
            source={avatar}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.sectionTitle}>
          Catatan Harian ({diaryEntries.length})
        </Text>

        {diaryEntries.map((entry) => (
          <DiaryCard
            key={entry.id}
            title={entry.title}
            date={entry.date}
            preview={entry.preview}
            moodUri={entry.moodUri}
            mood={entry.mood}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },

  content: {
    padding: 16,
    paddingBottom: 32,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingVertical: 8,
  },

  greeting: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: 2,
    marginBottom: 4,
  },

  header: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0f172a',
  },

  subtitle: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 4,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#cbd5e1',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 12,
  },
});
