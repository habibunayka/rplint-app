import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Pengaturan Akun & Profil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountSettingsScreen;