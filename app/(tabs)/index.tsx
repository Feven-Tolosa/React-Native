import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native'
import { Link } from 'expo-router'
import imag from '@/assets/images/cup-coffee.jpeg'
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imag} resizeMode='cover' style={styles.image}>
        <Text style={styles.tittle}>Coffee shop</Text>
        <Link href='/contact' style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  tittle: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(115, 63, 37, 0.5)',
  },
  link: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  button: {
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(115, 73, 30, 0.75)',
    padding: 6,
    margin: 90,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 3,
  },
})
