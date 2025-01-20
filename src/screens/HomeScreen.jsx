import React, { useRef } from "react";
import { View, StyleSheet, ScrollView, Animated } from "react-native";
import ProfileLayout from "../layouts/HomeLayout/ProfileLayout";
import AttendanceTime from  "../layouts/HomeLayout/AttendanceTime";

import colors from "../colors";
import AttendanceCount from "../layouts/HomeLayout/AttendanceCount";
import AttendanceCalendar from "../layouts/HomeLayout/AttendanceCalendar";

const HomeScreen = () => {
    const scrollY = useRef(new Animated.Value(0)).current; 

    const opacity = scrollY.interpolate({
        inputRange: [0, 150], 
        outputRange: [1, 0],
        extrapolate: 'clamp', 
    });

    return (
        <View style={styles.main}>
            <Animated.View style={[styles.profileContainer, { opacity }]}>
                <ProfileLayout />
            </Animated.View>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
                <View style={styles.container}>
                    {/* <Header/> */}
                    <AttendanceTime/>
                    <AttendanceCount/>
                    <AttendanceCalendar/>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        height: '100%',
        position: "relative",
        backgroundColor: colors.primary,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 20,
        zIndex: 4
    },
    container: {
        width: "100%",
        padding: 20,
        backgroundColor: 'white',
        marginTop: 160,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 1000,
    },
    profileContainer: {
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 0,
    },
    background: {
        width: "100%",
        height: 220,
        position: "absolute",
        zIndex: 2,
        top: 0,
        backgroundColor: colors.primary,
    },
});

export default HomeScreen;
