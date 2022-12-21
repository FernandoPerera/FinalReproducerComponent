import { StyleSheet, View } from 'react-native'

import Header from './components/Header.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030F2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
