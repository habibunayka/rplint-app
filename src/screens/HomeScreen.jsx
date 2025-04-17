import React, { useRef } from "react";
import { View, StyleSheet, Animated, FlatList } from "react-native";
import ProfileLayout from "../layouts/HomeLayout/ProfileLayout";
import AttendanceTime from  "../layouts/HomeLayout/AttendanceTime";
import AttendanceCount from "../layouts/HomeLayout/AttendanceCount";
import AttendanceCalendar from "../layouts/HomeLayout/AttendanceCalendar";
import colors from "../colors";

const HomeScreen = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const opacity = scrollY.interpolate({
        inputRange: [0, 150],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const dummyData = [{ key: 'dummy' }];

    return (
        <View style={styles.main}>
            <Animated.View style={[styles.profileContainer, { opacity }]}>
                <ProfileLayout />
            </Animated.View>

            <FlatList
                data={dummyData}
                renderItem={null}
                keyExtractor={(item) => item.key}
                contentContainerStyle={styles.scrollContainer}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                ListHeaderComponent={
                    <View style={styles.container}>
                        <AttendanceTime />
                        <AttendanceCount />
                        <AttendanceCalendar />
                    </View>
                }
            />
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
