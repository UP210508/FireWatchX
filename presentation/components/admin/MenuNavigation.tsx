import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import MenuOver from './MenuOver'
import { useState } from 'react'

const MenuNavigation = () => {

  const [isMenuOverShown, setIsMenuOverShown] = useState<boolean>(false);

  return (
    <View className='relative z-10 bg-black p-3 shadow-md flex flex-row items-center justify-between'>
      <Text className='text-white font-poppins-bold'>FireWatchX</Text>
      <Ionicons 
        onPress={ () => setIsMenuOverShown(!isMenuOverShown)} 
        name={`caret-${isMenuOverShown ? 'up' : 'down'}-outline`}
        color={'white'} 
        size={20} 
      />
      <MenuOver visible={isMenuOverShown} setIsMenuOverShown={setIsMenuOverShown} />
    </View>
  )
}

export default MenuNavigation