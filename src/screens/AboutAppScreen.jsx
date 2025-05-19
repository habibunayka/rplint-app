import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AboutAppScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/0?v=4' }}
        style={styles.logo}
      />
      <Text style={styles.appName}>RPLint App</Text>
      <Text style={styles.version}>Versi 1.0.0</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tentang Aplikasi</Text>
        <Text style={styles.description}>
        Absensi Siswa Berbasis Fingerprint adalah aplikasi yang dirancang untuk mempermudah proses
        pencatatan kehadiran siswa secara otomatis dan akurat menggunakan teknologi sidik jari (fingerprint).
        Dengan sistem ini, setiap siswa cukup menempelkan jarinya pada alat fingerprint untuk mencatat kehadirannya.

        Aplikasi ini terintegrasi langsung dengan database sekolah, sehingga data kehadiran tersimpan secara real-time
        dan dapat diakses oleh guru, wali kelas, maupun pihak administrasi sekolah. Fitur ini membantu dalam mengurangi kecurangan absensi,
        mempercepat rekapitulasi data, dan meningkatkan kedisiplinan siswa.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dikembangkan oleh</Text>
        <Text style={styles.developer}>Muhammad Istiqlal Fajar S. (Front End Developer)</Text>
        <Text style={styles.developer}>Habbibunayka Miftah A.R. (Full Stack Developer)</Text>
      </View>

      <View style={styles.section}>
        <Icon name="school-outline" size={20} color="#888" />
        <Text style={styles.footer}>© 2025 SMK Negeri 1 Cibinong. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

export default AboutAppScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  version: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    color: 'black',
    fontSize: 13,
    lineHeight: 22,
  },
  developer: {
    fontSize: 13,
    color: '#333',
  },
  footer: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
    marginLeft: 5,
  },
});
