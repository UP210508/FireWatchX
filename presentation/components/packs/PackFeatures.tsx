import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PackFeature from './PackFeature'
import PackSuscribe from './PackSuscribe'

interface Props {
  features: string[]
  active: string;
}

const PackFeatures = ({active, features}: Props) => {
  return (
    <View className='pb-5'>
      <View className='flex flex-row justify-between border-b border-b-gray-300 pb-1 mb-1'>
        <Text className='font-poppins-bold text-xs'>Feature</Text>
        <View className='flex flex-row gap-6'>
          <Text className='font-poppins-bold text-xs'>Free</Text>
          <Text className='font-poppins-bold text-xs'>Pack</Text>
        </View>
      </View>
      <FlatList 
        data={ features }
        renderItem={({item}) => <PackFeature feature={item} />}
      />
      {
        active && (
          <View className='mt-5'>
            <PackSuscribe />
            <Text className='text-gray-500 text-center pt-3'>Paga anualmente Cancela cuando quieras</Text>   
          </View>
        )
      }
    </View>
  )
}

export default PackFeatures