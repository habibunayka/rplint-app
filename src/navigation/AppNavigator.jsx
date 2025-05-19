import React, { useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import AccountSettingsScreen from '../screens/AccountSettingsScreen';
import AboutAppScreen from '../screens/AboutAppScreen';
import EditProfilScreen from "../screens/EditProfilScreen";
import MonthlyCheckin from "../screens/MonthlyCheckin";
import AttendanceHistory from '../layouts/HomeLayout/AttendanceCalendar';
import SubjectScreen from "../screens/SubjectScreen"; 
import colors from '../colors'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabButton = ({ children, onPress, isFocused, routeName }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: isFocused ? 1.1 : 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: isFocused ? -10 : 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: isFocused ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isFocused]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={{
        transform: [{ scale }, { translateY }],
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 3,
        marginHorizontal: '21',
        paddingHorizontal: 5,
        alignItems: 'center',
      }}>
        {children}
        <Animated.Text style={{
          opacity,
          color: isFocused ? colors.primary : 'gray',
          fontSize: 12,
        }}>
          {routeName}
        </Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainTabNavigator = () => (
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
        zIndex: 2,
        height: 60,
        paddingHorizontal: 0,
      },
      tabBarItemStyle: {
        paddingHorizontal: 0,
        flex: 1,
      },
      tabBarShowLabel: false,
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;
        if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
        else if (route.name === 'Notification') iconName = focused ? 'notifications' : 'notifications-outline';
        else if (route.name === 'Settings') iconName = focused ? 'settings' : 'settings-outline';
        else if (route.name === 'Subjects') iconName = focused ? 'book' : 'book-outline';

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarButton: (props) => (
        <CustomTabButton
          {...props}
          isFocused={props.accessibilityState.selected}
          routeName={route.name}
        />
      ),
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Subjects" component={SubjectScreen} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Main" component={MainTabNavigator} />
    <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
    <Stack.Screen name="AboutApp" component={AboutAppScreen} />
    <Stack.Screen name="EditProfilScreen" component={EditProfilScreen} />
    <Stack.Screen name="MonthlyCheckin" component={MonthlyCheckin} />
    <Stack.Screen name="AttendanceCalendar" component={AttendanceHistory} />
  </Stack.Navigator>
);

export default AppNavigator;