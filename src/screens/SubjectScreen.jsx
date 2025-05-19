import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const schedule = [
  {
    day: 'Senin',
    general: [
      { subject: 'Matematika', time: '08:00 - 09:30' },
      { subject: 'Bahasa Indonesia', time: '09:30 - 11:00' },
      { subject: 'PKN', time: '11:00 - 12:30' },
    ],
    major: [
      { subject: 'Pemograman Website', time: '13:00 - 14:30' },
    ],
  },
  {
    day: 'Selasa',
    general: [
      { subject: 'Bahasa Inggris', time: '08:00 - 09:30' },
      { subject: 'Pendidikan Agama', time: '09:30 - 11:00' },
    ],
    major: [
      { subject: 'IT-S', time: '11:00 - 12:30' },
      { subject: 'Basis Data', time: '13:00 - 14:30' },
    ],
  },
  {
    day: 'Rabu',
    general: [
      { subject: 'Sejarah', time: '08:00 - 09:30' },
      { subject: 'Seni Budaya', time: '09:30 - 11:00' },
    ],
    major: [
      { subject: 'IT-S', time: '11:00 - 12:30' },
    ],
  },
  {
    day: 'Kamis',
    general: [
      { subject: 'Matematika', time: '08:00 - 09:30' },
      { subject: 'PJOK', time: '09:30 - 11:00' },
    ],
    major: [
      { subject: 'PKK', time: '11:00 - 12:30' },
      { subject: 'Bahasa Jepang', time: '13:00 - 14:30' },
    ],
  },
  {
    day: 'Jumat',
    general: [
      { subject: 'Bahasa Indonesia', time: '08:00 - 09:30' },
    ],
    major: [
      { subject: 'IT-S', time: '09:30 - 11:00' },
      { subject: 'Bahasa Jepang', time: '11:00 - 12:30' },
    ],
  },
];

const SubjectScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Jadwal Pelajaran Bulanan</Text>
      {schedule.map((item, index) => {
        const maxRows = Math.max(item.general.length, item.major.length);
        return (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{item.day}</Text>
            <View style={styles.table}>
              <View style={[styles.row, styles.headerRow]}>
                <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>Pelajaran Umum</Text>
                <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>Waktu</Text>
                <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>Pelajaran Jurusan</Text>
                <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>Waktu</Text>
              </View>
              {Array.from({ length: maxRows }).map((_, i) => (
                <View key={i} style={[styles.row, i % 2 === 0 ? styles.evenRow : null]}>
                  <Text style={[styles.cell, { flex: 1 }]}>
                    {item.general[i] ? item.general[i].subject : '-'}
                  </Text>
                  <Text style={[styles.cell, { flex: 1 }]}>
                    {item.general[i] ? item.general[i].time : '-'}
                  </Text>
                  <Text style={[styles.cell, { flex: 1 }]}>
                    {item.major[i] ? item.major[i].subject : '-'}
                  </Text>
                  <Text style={[styles.cell, { flex: 1 }]}>
                    {item.major[i] ? item.major[i].time : '-'}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SubjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#0077b6',
  },
  dayContainer: {
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#023e8a',
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#0077b6',
    paddingBottom: 6,
  },
  table: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#dee2e6',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  evenRow: {
    backgroundColor: '#f8f9fa',
  },
  headerRow: {
    backgroundColor: '#0077b6',
  },
  cell: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 8,
    textAlignVertical: 'center',
  },
  headerCell: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

