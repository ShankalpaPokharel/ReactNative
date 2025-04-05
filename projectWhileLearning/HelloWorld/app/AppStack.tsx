import AboutScreen from "@/screens/AboutScreen";
import HomeScreen from "@/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            // headerShown: false,
            title: "Welcome Home",
            headerStyle: {
                backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerRight: () => (
                <Pressable onPress={() => alert("Menu button pressed")}>
                    <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
                </Pressable>
            ),
            contentStyle: {
                backgroundColor: "#e8e4f3",
            },
        }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
            name="About"
            component={AboutScreen}
            initialParams={{ name: "Guest" }}
            // options={({ route }) => ({ title: `About ${route.params.name}` })} //use when static
        />
    </Stack.Navigator>
    );
};

export default function App() {
    return (
       <AboutStack/>
    );
}
