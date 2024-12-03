import { View, Text } from 'react-native'

interface Props {
  color: 'primary' | 'secondary'
}

const BackgroundDiagonal = ({ color }: Props) => {

  const colorBackground = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
  }[color]

  return (
    <View className={` w-full h-[100vh] absolute right-0 top-0 ${colorBackground}`}>background</View>
  )
}

export default BackgroundDiagonal