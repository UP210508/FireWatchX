import ReturnBack from '@/presentation/components/admin/ReturnBack'
import SensorCard from '@/presentation/components/sensors/SensorCard'
import { sensors } from '@/presentation/data/sensors.data'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const SensorsPage = () => {
  return (
    <View className='relative'>    
      <View className='absolute z-10'>
        <ReturnBack title='Sensores' />
        
        <View className='p-3 pt-0'>
          <Text className='font-poppins-bold text-xl mb-2'>Dispositivos Disponibles</Text>
          <Text className='mb-8 font-poppins-regular text-xs'>Los datos recolectados por los sensores de temperatura, flama y humedad, se transmiten automáticamente a la nube utilizando los servicios de Azure.</Text>

          <FlatList 
            data={sensors}
            renderItem={ ({item}) => <SensorCard sensor={item} />}
          />          
        </View>
      </View>
      <View className='absolute top-50 left-0 translate-y-[60%] rounded-t-2xl w-full -z-10 h-[60vh]  bg-gradient-to-r from-indigo-600 to-pink-500 '></View>
    </View>
  )
}

export default SensorsPage