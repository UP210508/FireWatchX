import { Sensor } from '@/infraestructure/interfaces/sensor.interface';
import { router } from 'expo-router';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'

interface Props {
  sensor: Sensor;
}

const SensorCard = ({ sensor }: Props) => {

  const { id, description, imageCard, name } = sensor;

  return (
    <TouchableOpacity onPress={() => router.push(`/admin/sensores/${id}`)} className='bg-white border-2 border-gray-300 shadow-xl rounded-lg p-3 mb-5'>
      <View className='flex flex-row gap-3'>
        <Image style={{ width: '34%', height: 90 }} source={imageCard} />
        <View className='flex p-2 flex-1'>
          <Text className='text-secondary font-poppins-bold text-xl'>{name}</Text>
          <Text className='mb-3 text-xs text-gray-600'>{description}</Text>
          <View className='flex flex-row justify-end'>
            <Pressable className='bg-indigo-900 rounded-full py-[2px] px-2 flex justify-center items-center'><Text className='text-white font-poppins-regular text-[10px]'>Ver Información</Text></Pressable>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SensorCard