import { View, Text, Image, TouchableOpacity } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Welcome = () => {
  const router = useRouter()

  const handleStart = async () => {
    await AsyncStorage.setItem('hasLaunched', 'true')
    router.replace('/(tabs)/home')
  }

  return (
    <ScreenWrapper>
      <SafeAreaView className="flex-1">
        <View className="flex items-center mt-24">
          <Text className="text-white text-[74px] font-bold text-center">Bubbly</Text>
          <Image
            className="w-96 h-96"
            source={require('../assets/images/welcome.png')}
          />
        </View>

        <View className="mt-6">
          <Text className="text-white text-[32px] px-4 text-center">
            Stay connected with your friends and family
          </Text>
        </View>

        <TouchableOpacity
          className="bg-white p-4 mx-4 mt-6 rounded-full"
          onPress={handleStart}
        >
          <Text className="text-black text-center text-2xl font-semibold">
            Get Started
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScreenWrapper>
  )
}

export default Welcome
