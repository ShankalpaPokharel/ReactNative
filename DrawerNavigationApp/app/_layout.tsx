import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar backgroundColor="#0f172a" />
            <Drawer 
             screenOptions={{
              headerTitle: 'Recipe App',
              drawerActiveTintColor: "#22d3ee",
              drawerInactiveTintColor: "#94a3b8",
              drawerStyle: {
                backgroundColor: "#0f172a",
              },
              headerStyle: {
                backgroundColor: "#0f172a",
              },
              headerTintColor: "#f8fafc",
          }}
            >
                <Drawer.Screen
                    name="index"
                    options={{
                        title: "Home title",
                        drawerLabel: "Home Label",
                        drawerIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="dashboard"
                    options={{
                        title: "Dashboard",
                        drawerLabel: "Dashboard",
                        drawerIcon: ({ color }) => <FontAwesome name="dashboard" size={24} color={color} />,
                    }}
                />
                <Drawer.Screen
                    name="setting"
                    options={{
                        title: "Settings",
                        drawerLabel: "Settings",
                        drawerIcon: ({ color }) => <FontAwesome name="cog" size={24} color={color} />,
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
