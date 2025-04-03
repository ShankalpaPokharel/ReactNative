import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
    return <Tabs
    screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarShowLabel: true,
        headerTitle: 'Recipe App',
        tabBarActiveTintColor: "#22d3ee",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: {
          backgroundColor: "#0f172a",
        },
        headerStyle: {
          backgroundColor: "#0f172a",
        },
        headerTintColor: "#f8fafc",
    }}
    >
        <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'Home',
                tabBarLabel: 'Home', 
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                ),
            }} 
        />
        <Tabs.Screen 
            name="explore" 
            options={{ 
                title: 'Explore',
                tabBarLabel: 'Explore', 
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="search" color={color} size={size} />
                ),
            }} 
        />
        <Tabs.Screen 
            name="profile" 
            options={{ 
                title: 'My Profile',
                tabBarLabel: 'My Profile', 
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user" color={color} size={size} />
                ),
                tabBarBadge: 3
            }} 
        />
    </Tabs>;
}