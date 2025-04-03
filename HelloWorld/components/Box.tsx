import {View, Text, StyleSheet} from 'react-native'

export default function Box({children,style}: any) {
  return (
    <View style={[styles.box, style]}>
        <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        padding: 20
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
})