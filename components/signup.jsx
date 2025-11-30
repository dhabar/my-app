import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
 import { Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {  Feather, FontAwesome } from '@expo/vector-icons'
import { Link,   } from 'expo-router'


const signin = () => {

    
  return ( 
        <ScrollView>
            <StatusBar hidden/>
            <Image
            source={require('../../assets/images/welcome.png')}
            className='w-screen h-96'
        />
        <Text className='text-5xl mt-16 font-bold px-3 text-center'>SignUp</Text>
        <View className='mt-12 mx-4 flex py-3'>
            <Text className='mb-3'>Email</Text>
            <TextInput placeholder='enter your email' className='bg-gray-300 rounded-md px-4'/>
            <Text className='text-center text-xl'>or</Text>
        </View>
        <View>
            <TouchableOpacity className='flex flex-row text-center justify-center items-center border my-4 p-3 mx-4 rounded-md border-gray-300'>
                <FontAwesome name='google' color={''} size={24}/>
                <Text className='text-xl font-light ml-3'>SignUp With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex flex-row text-center justify-center items-center border p-3 mx-4 rounded-md border-gray-300'>
                <FontAwesome name='github' color={''} size={24}/>
                <Text className='text-xl font-light ml-3'>SignUp With Github</Text>
            </TouchableOpacity>
            <Text className='text-center text-red-500'>All ready have acount ? <Link href={'/signin'}>Signin</Link></Text>
        </View>

        </ScrollView>
  )
}

export default signin