
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Home' ,headerShown: false}} />
      <Tabs.Screen name="shop" options={{ title: 'Cart' }} />
      <Tabs.Screen name="search" options={{ title: 'Search' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />

    </Tabs>
  )
}

export default _layout