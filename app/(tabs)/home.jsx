import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

const home = () => {
  return (
      <LinearGradient colors={['#ff00f5', '#FFD6E5', '#FEd5D8']} style={{flex: 1}} start={{x:0, y:0}} end={{x:1, y:0.3}}>
          <Text>home</Text>
      </LinearGradient>
    
  )
}

export default home