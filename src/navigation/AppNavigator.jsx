import React, { useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingScreen from '../screens/SettingScreen'; 
import AccountSettingsScreen from '../screens/AccountSettingsScreen'; // Impor halaman baru
import AboutAppScreen from '../screens/AboutAppScreen'; // Impor halaman baru
import colors from '../colors';

import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabButton = ({ children, onPress, isFocused, routeName }) => {
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const translateYAnimation = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnimation, {
        toValue: isFocused ? 1.1 : 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnimation, {
        toValue: isFocused ? -10 : 0, 
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: isFocused ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isFocused]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={{
          transform: [
            { scale: scaleAnimation }, 
            { translateY: translateYAnimation }, 
          ],
          backgroundColor: isFocused ? '#ffffff' : '#ffffff',
          borderRadius: 50,
          padding: 3,
          marginHorizontal: '8%',
          alignItems: 'center',
          height: 'auto'
        }}
      >
        {children}
        <Animated.Text
          style={{
            opacity: textOpacity,
            color: isFocused ? colors.primary : 'gray',
            fontSize: 12,
          }}
        >
          {routeName}
        </Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: 'white',
          borderTopColor: 'transparent',
          width: '100%', 
          alignItems: 'center',
          justifyContent: 'space-evenly',
          zIndex: 2,
          height: 60
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarButton: (props) => (
          <CustomTabButton {...props} isFocused={props.accessibilityState.selected} routeName={route.name} />
        ),
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} /> {/* Tambahkan halaman baru */}
      <Stack.Screen name="AboutApp" component={AboutAppScreen} /> {/* Tambahkan halaman baru */}
    </Stack.Navigator>
  );
};

export default AppNavigator;