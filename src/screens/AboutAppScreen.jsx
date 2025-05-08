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
        <Icon name="arrow-back-outline" size={24} color="white" />
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://ui-avatars.com/api/?name=APP&background=0D8ABC&color=fff' }}
        style={styles.logo}
      />
      <Text style={styles.appName}>My School App</Text>
      <Text style={styles.version}>Versi 1.0.0</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tentang Aplikasi</Text>
        <Text style={styles.description}>
          Aplikasi ini dirancang untuk memudahkan siswa dalam mengakses informasi penting seperti
          pengumuman, presensi, jadwal, dan pengaturan akun. Dengan tampilan modern dan fitur yang
          intuitif, aplikasi ini akan membantu kegiatan sekolah jadi lebih efisien dan praktis.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dikembangkan oleh</Text>
        <Text style={styles.developer}>Muhammad Istiqlal Fajar S.</Text>
      </View>

      <View style={styles.section}>
        <Icon name="school-outline" size={20} color="#888" />
        <Text style={styles.footer}>© 2025 SMK Negeri Contoh. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

export default AboutAppScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
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
    color: 'white',
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
    color: 'white',
    marginBottom: 10,
  },
  description: {
    color: '#ccc',
    fontSize: 15,
    lineHeight: 22,
  },
  developer: {
    fontSize: 16,
    color: '#ccc',
  },
  footer: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
    marginLeft: 5,
  },
});
