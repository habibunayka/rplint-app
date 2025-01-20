import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import colors from "../../colors.js";

const AttendanceCalendar = () => {
    const [markedDates, setMarkedDates] = useState({
        '2024-10-15': { 
            customStyles: {
                container: { backgroundColor: colors.primary },
                text: { color: 'white' } 
            }
        }, 
        '2024-10-16': { 
            customStyles: {
                container: { backgroundColor: 'red' },
                text: { color: 'white' }
            }
        }, 
        '2024-10-17': { 
            customStyles: {
                container: { backgroundColor: 'yellow' },
                text: { color: 'black' }
            }
        }, 
    });

    return (
        <View style={styles.container}>
            <Calendar
                markedDates={markedDates}
                markingType={'custom'} 
                theme={{
                    todayTextColor: colors.primary,
                    dayTextColor: '#2d4150',
                    textDayFontWeight: 'bold',
                    textMonthFontWeight: 'bold',
                    textDayFontSize: 16,
                    textMonthFontSize: 18,
                }}
            />
        </View>
    );
};

export default AttendanceCalendar;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
        elevation: 3,
        marginTop: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
});
