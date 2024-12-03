import { Alert } from '@/infraestructure/interfaces/alert.interface'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, Pressable } from 'react-native'

interface Props extends Alert {
  smallAlert?: boolean
}

const AlertCard = ({ id, description, time, title, type, smallAlert = false }: Props ) => {

  const bgColor = {
    info: 'bg-blue-50',
    warn: 'bg-orange-50',
    error: 'bg-red-50',
  }[type]

  const titleColor = {
    info: 'text-blue-600',
    warn: 'text-orange-600',
    error: 'text-red-600',
  }[type]

  const iconColor = {
    info: '#2563eb',
    warn: '#ea580c',
    error: '#dc2626'
  }[type]

  const iconName = {
    info: 'information-circle',
    warn: 'warning',
    error: 'bug'
  }[type]

  return (
    <Pressable className={`shadow-md mx-2 bg-red p-3 rounded w-56 ${bgColor}`}>
      <View className='flex flex-row justify-between items-center mb-1'>
        <Ionicons color={ iconColor } name={`${iconName}-outline`} size={30} />
        <Text className={`${titleColor} font-poppins-bold text-xs`}>{title}</Text>
      </View>
      <Text className='p-1 mb-1 font-poppins-regular text-xs'>{description}</Text>
      <Text className='text-xs text-right text-[10px]'>{time.toString()}</Text>
    </Pressable>
  )
}

export default AlertCard