import { View, Text } from 'react-native'
import ReturnButton from '../shared/ReturnButton';

interface Props {
  title: string;
}

const ReturnBack = ({title}:Props) => {
  return (
    <View className='p-3 flex flex-row justify-between mb-6'>
      <ReturnButton />
      <Text className='w-fit px-2 bg-clip-border bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-poppins-black text-2xl'>{title}</Text>
    </View>
  )
}

export default ReturnBack