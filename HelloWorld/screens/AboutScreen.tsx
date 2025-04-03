import { useLayoutEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AboutScreen({ navigation, route }:any) {
  const { name } = route.params;
//   can use useEffect also(can feel noticable delay) but useLayoutEffect is better
    useLayoutEffect(() => {
      navigation.setOptions({
        title: name,
      });
    },[navigation, name]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title="Update the name"
        onPress={() => navigation.setParams({ name: "Codevolution" })}
      />
      <Button
        title="Go back with data"
        onPress={() => {
          navigation.navigate("Home", { result: "Data from About" });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});