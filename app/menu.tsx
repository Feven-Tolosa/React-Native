import {
  Appearance,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native'

import { Colors } from '@/constants/Colors'
export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

  const styles = createStyles(theme, colorScheme)
  const Container = Platform.os === 'web' ? ScrollView : SafeAreaView

  return (
    <Container>
      <FlatList data={[]} render></FlatList>
    </Container>
  )
}
