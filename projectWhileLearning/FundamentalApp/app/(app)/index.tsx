import { Text, View, Pressable,StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
            }}
        >
            <Text>Hello Page</Text>
            <Link href="/about">About</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/products">Products</Link>
            <Link href="/login">Login</Link>
            <Link href="/products/best-sellers/playstation" asChild>
                <Pressable style={styles.button}><Text>Playstation</Text></Pressable>
            </Link>
        </View>
    );
}
const styles = StyleSheet.create({
   button:{
    backgroundColor:"lightblue",
    padding:20,
    borderRadius:6
   }
});