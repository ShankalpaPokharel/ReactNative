import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function ProductDetails() {
    const {id} = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Details about product with id  {id}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap:20
    }
})