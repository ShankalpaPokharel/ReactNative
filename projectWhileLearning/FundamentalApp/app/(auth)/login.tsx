import { StyleSheet, Text, View , Button} from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Login" onPress={() => router.replace("/profile")} />
      <Link href="/register">Create a account</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});