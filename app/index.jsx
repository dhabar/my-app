import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { View, Text } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

const index = () => {

  const router = useRouter()
  useEffect(() => {
    setTimeout(()=>(
      router.replace('wellcome')
    ),100)
    
    
  }, [])
  
  return (
    
      <View className='flex items-center content-center mx-auto  w-full bg-black h-full'>
    <Animated.Image 

    source={require('../assets/images/splashImage.png')}
    className='w-64 h-64 mt-96'
    resizeMode={'contain'}
    entering={FadeInDown.duration(900).springify()}
    />
    </View>
  )
}

export default index