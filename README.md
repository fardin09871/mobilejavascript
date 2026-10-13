# Diary App — Mobile Programming

## Identitas Mahasiswa
- **Nama:** [Nama Lengkap]
- **NIM:** [NIM]
- **Mata Kuliah:** Mobile Programming
- **Praktikum:** Pengembangan Diary App

## Deskripsi
Diary App merupakan aplikasi buku harian berbasis React Native dan Expo yang memungkinkan pengguna melihat daftar catatan serta membuka detail diary melalui modal.

## Fitur
- Design tokens untuk konsistensi desain.
- Diary Card interaktif.
- Modal detail catatan diary.
- Daftar menggunakan FlatList responsif.
- Satu kolom pada layar dengan lebar kurang dari 600 px.
- Dua kolom pada layar dengan lebar minimal 600 px.
- AccessibilityLabel pada kartu diary.
- StyleSheet untuk pengaturan tampilan komponen.

## Teknologi
- React Native
- Expo
- JavaScript

## Cara Menjalankan Project
1. Pastikan Node.js sudah terinstal.
2. Buka terminal pada folder project.
3. Instal dependensi:

   ```bash
   npm install
   ```

4. Jalankan aplikasi:

   ```bash
   npx expo start
   ```

5. Buka aplikasi melalui Expo Go atau Android Emulator.

## Struktur Folder
```text
diary-app/
├── App.js
├── assets/
└── src/
    ├── components/
    │   ├── DiaryCard.js
    │   └── DiaryDetailModal.js
    ├── screens/
    │   └── DiaryListScreen.js
    └── styles/
        └── tokens.js
```

## Dokumentasi
