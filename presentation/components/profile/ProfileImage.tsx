import { Image } from 'react-native'
import { View, Text } from 'react-native'

const ProfileImage = () => {
  return (
    <View className='bg-white rounded-full p-1 shadow-md mb-2'>
      <Image 
        className='w-20 h-20 rounded-full'
        source={{ uri: 'https://randomuser.me/api/portraits/women/47.jpg' }} 
      />
    </View>
  )
}

export default ProfileImage