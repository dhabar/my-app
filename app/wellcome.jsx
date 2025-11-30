
import { View, Text, Image, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const wellcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper >
    <SafeAreaView>
      
      <View className='flex justify-center items-center mt-32'>
        <Text className='text-white text-[74px] font-bold text-center'>Bubbly</Text>
        <Image
        className='w-96 h-96'
        source={require('../assets/images/welcome.png')}
        />
      </View>
      <View>
        <View className=''>
          <Text className='text-white text-[45px] py-4 px-4'>Stay Conected with your freinds and family</Text>
        </View>
        <TouchableOpacity className='bg-white p-3 mx-4 mt-2 rounded-full' onPress={()=> (router.replace('(auth)/'))}>
          <Text className='text-black text-center text-2xl'>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ScreenWrapper>
  )
}

export default wellcome