import { Alert } from '@/infraestructure/interfaces/alert.interface'
import { View, Text } from 'react-native'

interface Props {
  alerts: any[]
}

const AlertCounter = ({ alerts }: Props) => {
  return (
    <View className='w-[90%] m-auto mb-6 flex flex-row gap-3 justify-between'>
      <View className='bg-slate-950 shadow-md flex-1 rounded-lg p-2'>
        <Text className='font-poppins-bold text-white text-xs'>Información</Text>
        <Text className='font-poppins-regular text-2xl text-white text-right'>{alerts[0].length}</Text>
      </View>
      <View className='bg-slate-950 shadow-md flex-1 rounded-lg p-2'>
        <Text className='font-poppins-bold text-white text-xs'>Avisos</Text>
        <Text className='font-poppins-regular text-2xl text-white text-right'>{alerts[1].length}</Text>
      </View>
      <View className='bg-slate-950 shadow-md flex-1 rounded-lg p-2'>
        <Text className='font-poppins-bold text-white text-xs'>Errores</Text>
        <Text className='font-poppins-regular text-2xl text-white text-right'>{alerts[2].length}</Text>
      </View>
    </View>
  )
}

export default AlertCounter