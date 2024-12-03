import { Ionicons } from '@expo/vector-icons'
import { View, Text } from 'react-native'

const PackFeature = ( {feature}: { feature: string } ) => {
  return (
    <View className='flex flex-row justify-between mb-3 items-center'>
      <Text className='font-poppins-regular text-xs'>{feature}</Text>
      <View className='flex flex-row gap-6'>
        <Ionicons size={16} color={"gray"} name='remove-circle-outline' />
        <Ionicons size={16} color={"green"} name='checkmark-circle' />
      </View>
    </View>
  )
}

export default PackFeature