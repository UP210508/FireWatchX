import CustomButton from '@/presentation/components/shared/CustomButton'
import { router } from 'expo-router'
import { Image, Text, View } from 'react-native'

const FireWatchApp = () => {
  return (
    <View>
      <View className='flex justify-center items-center flex-1 px-10 pt-12'>
        <Image style={{ width: 250, height: 280 }} source={require("../assets/images/get-started.svg")} />

        <Text className='py-8 font-poppins-bold text-2xl text-center'>Comienza con la aplicación</Text>
        <Text className='text-center font-poppins-regular mb-12'>La mejor aplicación para el resguardo de tus propiedades. Sensores que te facilitan la vida.</Text>

        <CustomButton onPress={ () => router.push('/auth/login') } className='w-full' color='secondary'>Acceder a la aplicación</CustomButton>
      </View>
    </View>
  )
}

export default FireWatchApp