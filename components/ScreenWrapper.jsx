import { View,  ImageBackground } from 'react-native'

const ScreenWrapper = ({children}) => {
  return (
    <View className='flex-1'>
        <ImageBackground 
        source={require('../assets/images/bgPattern.png')}
        className='flex-1 w-full h-screen'
      
        >{children}

        </ImageBackground>
    </View>
  )
}

export default ScreenWrapper