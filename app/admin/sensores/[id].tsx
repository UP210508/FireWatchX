import { View, Text, Image } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { sensors } from '@/presentation/data/sensors.data';
import ReturnButton from '@/presentation/components/shared/ReturnButton';
import CustomButton from '@/presentation/components/shared/CustomButton';
import { useState } from 'react';
import SensorModal from '@/presentation/components/sensors/SensorModal';

const SensorScreen = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { id } = useLocalSearchParams();
  const sensor = sensors.find( sensor => sensor.id === Number(id) )

  return (
    <View className='relative'>
      <ReturnButton className='absolute top-5 left-5' />
      <View>
        <Text className='px-2 bg-clip-border bg-gradient-to-r w-fit px-2 from-indigo-600 to-pink-500  text-white font-poppins-bold text-2xl text-right absolute top-8 right-5'>Dispositivo {sensor?.name}</Text>
        <Image className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[100px]' style={{ width: 220, height: 220 }} source={{ uri: sensor?.image }} />
      </View>
      <View className='bg-slate-950 p-6 mt-[90%] rounded-t-[40px] h-[50%]'>
        <Text className='font-poppins-bold text-xl mb-5 text-center text-secondary'>Medidas Actuales</Text>

        <View className='grid grid-cols-2 gap-8 px-5 mb-10'>
          <View>
            <Text className='text-white font-poppins-regular text-xs mb-1'>Temperatura</Text>
            <Text className='text-white font-poppins-regular text-xl text-center'>27.6 °C</Text>
          </View>
          <View>
            <Text className='text-white font-poppins-regular text-xs mb-1'>Humedad</Text>
            <Text className='text-white font-poppins-regular text-xl text-center'>12.2 g/m<sup>3</sup></Text>
          </View>
          <View>
            <Text className='text-white font-poppins-regular text-xs mb-1'>Última lectura</Text>
            <Text className='text-white font-poppins-regular text-xl text-center'>24 Nov, 2024</Text>
          </View>
          <View>
            <Text className='text-white font-poppins-regular text-xs mb-1'>Estado</Text>
            <Text className='text-white font-poppins-regular text-xl text-center flex flex-row flex-1 items-center justify-center'><View className='w-5 h-5 bg-green-600 rounded-full'></View> Activo</Text>
          </View>
        </View>

        <View className='px-3'>
          <CustomButton color='secondary' onPress={() => setIsModalOpen(true)}>Leer Funcionamiento</CustomButton>
        </View>

        { isModalOpen && <SensorModal sensor={sensor} openModal={ setIsModalOpen } />}
      </View>
    </View>
  )
}

export default SensorScreen