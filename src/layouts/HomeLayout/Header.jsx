import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Selamat Datang</Text>
            <Image
                source={require("../../../assets/icon.png")}
                style={styles.logo}
            ></Image>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        width: 100,
        height: 50,
      },
    text: {
        marginLeft: 15,
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    }
});
