import { View, Text, Pressable } from 'react-native'

interface Props {
  category: string;
  value: string;
  className?: string;
}

const ProfileField = ({category, value, className}: Props) => {
  return (
    <Pressable className={`${className} flex border-gray-500 pb-3`}>
      <Text className='font-poppins-bold'>{category}</Text>
      <Text className=''>{ value.includes('@') ? value: value.replace( value[0], value[0].toUpperCase() ) }</Text>
    </Pressable>
  )
}

export default ProfileField