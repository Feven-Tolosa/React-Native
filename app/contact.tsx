import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function explore() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/coffee.webp')}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text1}>Coffee Shop</Text>
        <Text style={styles.text2}>The best coffee ever.</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text1: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text2: {
    fontSize: 22,
    fontWeight: 'light',
    textAlign: 'left',
    left: 20,
    color: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})
