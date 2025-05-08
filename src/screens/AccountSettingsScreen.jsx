import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors';

const AccountSettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profil & Akun</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Foto Profil */}
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/0?v=4', // Ganti dengan URL profil pengguna
            }}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.editAvatarButton}>
            <Icon name="photo-camera" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Informasi Akun */}
        <View style={styles.infoCard}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>Muhammad Istiqlal Fajar S.</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>istiqlal@example.com</Text>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Icon name="edit" size={20} color="#fff" />
          <Text style={styles.editButtonText}>Edit Profil</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountSettingsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#ccc',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary || '#007bff',
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    elevation: 1,
  },
  label: {
    color: '#777',
    fontSize: 13,
    marginTop: 10,
  },
  value: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary || '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});
