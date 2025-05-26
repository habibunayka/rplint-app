import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';

const biodata = [
  { label: 'Nama', value: 'Muhammad Istiqlal Fajar S.' },
  { label: 'Email', value: 'istiqlal@example.com' },
  { label: 'NIS', value: '123456789' },
  { label: 'NISN', value: '123456789' },
  { label: 'Alamat', value: 'Puri Alam Kencana 2 Blok Q3 No 16 RT 4 / RW 8 Kecamatan Nanggewer Mekar, Cibinong, Bogor.' },
  { label: 'Nomor Telepon', value: '089637383226' },
];

const AccountSettingsScreen = () => {
  const navigation = useNavigation();

  const copyToClipboard = async (text, label) => {
    await Clipboard.setStringAsync(text);
    ToastAndroid.show(`${label} disalin`, ToastAndroid.SHORT);
  };

  return (
    <LinearGradient colors={['#0D92F4', '#ffffff']} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profil & Akun</Text>
        </View>

        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/0?v=4',
              }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.infoCard}>
            {biodata.map((item, index) => (
              <View key={index} style={styles.infoRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>{item.label}</Text>
                  <Text style={styles.value}>{item.value}</Text>
                </View>
                <TouchableOpacity onPress={() => copyToClipboard(item.value, item.label)}>
                  <Icon name="content-copy" size={20} color="#777" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AccountSettingsScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#eee',
    // backgroundColor dihapus agar transparan dan ikut gradasi
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 30,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#ccc',
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    elevation: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    color: '#777',
    fontSize: 13,
  },
  value: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});
