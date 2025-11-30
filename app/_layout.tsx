
import React from 'react'
import '../global.css'
import { Stack } from 'expo-router'
import { ClerkProvider } from "@clerk/clerk-expo";

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown: false}} >
      <Stack.Screen name='index'/>
    </Stack>
   
  )
}

export default _layout