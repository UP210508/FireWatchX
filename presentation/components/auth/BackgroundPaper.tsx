import { View, Text } from 'react-native'

interface Props {
  titleFirstPart: string;
  titleSecondPart: string;
  description: string;
}

const BackgroundPaper = ({ titleFirstPart, titleSecondPart, description }: Props ) => {
  return (
    <View className='pt-16 pb-28 h-80 w-full bg-gradient-to-r from-indigo-600 to-pink-500 rounded-b-2xl'>
      <Text className='text-center text-2xl uppercase color-white font-poppins-black'>{titleFirstPart}</Text>
      <Text className='text-center text-2xl uppercase color-white font-poppins-black mb-3'>{titleSecondPart}</Text>
      <Text className='font-poppins-regular text-xs text-center color-white'>{description}</Text>
    </View>
  )
}

export default BackgroundPaper