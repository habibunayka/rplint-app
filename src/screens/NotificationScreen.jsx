import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const notifications = [
  {
    id: "1",
    title: "Pesan baru dari Admin",
    message: "Silakan cek info terbaru dari sekolah.",
    time: "2 jam yang lalu",
    unread: true,
  },
  {
    id: "2",
    title: "Update Jadwal Pelajaran",
    message: "Jadwal hari Senin telah diperbarui dengan beberapa mata pelajaran tambahan dan perubahan jam pelajaran.",
    time: "Kemarin",
    unread: false,
  },
  {
    id: "3",
    title: "Pengumuman OSIS",
    message: "Rapat OSIS akan diadakan hari Jumat pukul 15.00 WIB di ruang OSIS. Kehadiran wajib untuk semua anggota.",
    time: "3 hari yang lalu",
    unread: true,
  },
];

const NotificationItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.notificationItem, item.unread && styles.unread]}
      onPress={() => onPress(item)}
    >
      <Icon
        name="notifications"
        size={24}
        color={item.unread ? "#007bff" : "#888"}
        style={{ marginRight: 12 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>
          {item.message.length > 40 ? item.message.slice(0, 40) + "..." : item.message}
        </Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      {item.unread && <View style={styles.dot} />}
    </TouchableOpacity>
  );
};

const NotificationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handlePress = (item) => {
    setSelectedNotification(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifikasi</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem item={item} onPress={handlePress} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Modal popup */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedNotification && (
              <>
                <Text style={styles.modalTitle}>{selectedNotification.title}</Text>
                <Text style={styles.modalMessage}>{selectedNotification.message}</Text>
                <Text style={styles.modalTime}>{selectedNotification.time}</Text>
                <Pressable
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeText}>Tutup</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  notificationItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },
  unread: {
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  message: {
    fontSize: 14,
    color: "#555",
  },
  time: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#007bff",
    marginLeft: 10,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 10,
    color: "#444",
  },
  modalTime: {
    fontSize: 12,
    color: "#888",
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default NotificationScreen;
