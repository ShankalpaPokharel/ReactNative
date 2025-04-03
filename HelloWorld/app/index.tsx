import CourseListScreen from "@/screens/CourseList";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
import { AboutStack } from "./AppStack";

export default function App() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelPosition: "beside-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: "purple",
                tabBarInactiveTintColor: "green",
            }}
        >
            <Tab.Screen name="Course List" component={CourseListScreen} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "My Profile",
                    tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
                    tabBarBadge: 3,
                    tabBarBadgeStyle: { backgroundColor: "blue" },
                }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen 
            name="About Stack" 
            component={AboutStack} 
            options={{
                 headerShown: false 
                 }} 
                 />
        </Tab.Navigator>
    );
}
