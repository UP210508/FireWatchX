import { Image, Text, View } from 'react-native'
import NavigationItem from '@/presentation/components/admin/NavigationItem'
import { menuOptions } from '@/presentation/data/menu-options.data'
import { profile } from '@/presentation/data/profile.data'

const MenuScreen = () => {
  return (
    <View>
      <View className='p-3 pt-8 w-[90%] m-auto h-[94vh]'>
        <View className='bg-white shadow-md mb-8 rounded-full p-2 px-5 flex flex-row items-center justify-between'>
          <Image className='w-11 h-11 rounded-full' source={{ uri: 'https://randomuser.me/api/portraits/women/47.jpg' }} />
          <View className='flex items-end'>
            <Text className='font-poppins-bold text-xs'>Danna Janeth Sánchez Carreón</Text>
            <Text className='px-2 font-poppins-regular text-xs text-right rounded-full bg-secondary-400 w-fit'>Plan: <Text>{profile.plan}</Text></Text>
          </View>
        </View>
        <View className='grid grid-cols-2 gap-5'>
          {
            menuOptions.map( option => (
              <NavigationItem {...option} />
            ))
          }
        </View>
      </View>
      <View className='rounded-t-3xl h-80 w-full bg-gradient-to-r from-indigo-600 to-pink-500 z-[-1] absolute bottom-0 left-0'></View>
    </View>
  )
}

export default MenuScreen