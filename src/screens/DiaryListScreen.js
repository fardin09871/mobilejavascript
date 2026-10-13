
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';

import {
  COLORS,
  SPACE,
  TYPO,
  BREAKPOINTS,
} from '../styles/tokens';

import happy from '../../assets/moods/happy.png';
import mad from '../../assets/moods/mad.png';
import smile from '../../assets/moods/smile.png';
import sedih from '../../assets/moods/sedih.png';

const avatar = smile;

const diaryEntries = [
  {
    id: '1',
    title: 'Hari yang Menyenangkan',
    date: '12 Oktober 2026',
    preview: 'Hari ini banyak hal menyenangkan terjadi.',
    body: 'Hari ini aku menjalani aktivitas dengan perasaan senang. Aku belajar hal baru dan menghabiskan waktu bersama teman-teman.',
    mood: 'Senang',
    moodUri: happy,
  },
  {
    id: '2',
    title: 'Tugas yang Menumpuk',
    date: '11 Oktober 2026',
    preview: 'Banyak tugas yang harus diselesaikan.',
    body: 'Tugas kuliah cukup banyak hari ini. Aku harus belajar mengatur waktu dan menyelesaikan pekerjaan satu per satu.',
    mood: 'Kesal',
    moodUri: mad,
  },
  {
    id: '3',
    title: 'Belajar Hal Baru',
    date: '10 Oktober 2026',
    preview: 'Mencoba memahami materi pemrograman.',
    body: 'Aku mencoba memahami materi pemrograman yang sebelumnya terasa sulit. Setelah berlatih, aku mulai menemukan polanya.',
    mood: 'Semangat',
    moodUri: smile,
  },
  {
    id: '4',
    title: 'Hari yang Melelahkan',
    date: '9 Oktober 2026',
    preview: 'Perlu istirahat setelah aktivitas seharian.',
    body: 'Aktivitas hari ini cukup melelahkan. Aku akan beristirahat dan menyiapkan rencana untuk hari berikutnya.',
    mood: 'Sedih',
    moodUri: sedih,
  },
  {
    id: '5',
    title: 'Ngobrol dengan Teman',
    date: '8 Oktober 2026',
    preview: 'Senang bisa berbagi cerita dengan teman.',
    body: 'Aku menghabiskan waktu untuk berbagi cerita dengan teman. Obrolan sederhana membuat suasana hati menjadi lebih baik.',
    mood: 'Senang',
    moodUri: happy,
  },
  {
    id: '6',
    title: 'Target Minggu Ini',
    date: '7 Oktober 2026',
    preview: 'Menyusun target belajar dan proyek.',
    body: 'Aku menulis target belajar untuk minggu ini, termasuk latihan coding dan melanjutkan proyek aplikasi. Target yang jelas membuatku lebih terarah.',
    mood: 'Semangat',
    moodUri: smile,
  },
  {
    id: '7',
    title: 'Waktu untuk Diri Sendiri',
    date: '6 Oktober 2026',
    preview: 'Mengambil jeda untuk memulihkan energi.',
    body: 'Hari ini aku memberi waktu untuk diri sendiri. Aku ingin menjaga keseimbangan antara kuliah, proyek, dan istirahat.',
    mood: 'Tenang',
    moodUri: sedih,
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState(null);

  const twoCols = width >= BREAKPOINTS.tablet;

  const renderItem = ({ item }) => (
    <View style={[
      styles.cardWrapper,
      twoCols && styles.gridItem,
    ]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        onPress={() => setSelected(item)}
        variant={twoCols ? 'grid' : 'list'}
      />
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.eyebrow}>
            PERSONAL DIARY
          </Text>

          <Text style={styles.heading}>
            Buku Harian
          </Text>

          <Text style={styles.subtitle}>
            Ceritakan harimu di sini.
          </Text>
        </View>

        <Image
          source={avatar}
          style={styles.avatar}
          accessibilityLabel="Avatar diary"
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Catatan Harian ({diaryEntries.length})
        </Text>
      </View>

      <FlatList
        key={twoCols ? 'grid' : 'list'}
        data={diaryEntries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={twoCols ? 2 : 1}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={
          twoCols ? styles.columnWrapper : undefined
        }
        showsVerticalScrollIndicator={false}
        initialNumToRender={7}
      />

      <DiaryDetailModal
        visible={selected !== null}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACE.l,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SPACE.xl,
    paddingBottom: SPACE.l,
    gap: SPACE.m,
  },

  headerText: {
    flex: 1,
  },

  eyebrow: {
    fontSize: TYPO.caption,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: COLORS.accent,
    marginBottom: SPACE.xs,
  },

  heading: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
  },

  subtitle: {
    marginTop: SPACE.xs,
    fontSize: TYPO.body,
    color: COLORS.muted,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.accentLight,
  },

  sectionHeader: {
    paddingTop: SPACE.s,
    paddingBottom: SPACE.m,
  },

  sectionTitle: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
  },

  listContent: {
    paddingBottom: SPACE.xxl,
  },

  cardWrapper: {
    width: '100%',
    marginBottom: SPACE.m,
  },

  columnWrapper: {
    gap: SPACE.m,
    alignItems: 'stretch',
  },

  gridItem: {
    width: '48%',
  },
});
