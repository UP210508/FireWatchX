import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import CustomButton from '@/presentation/components/shared/CustomButton'
import BackgroundPaper from '@/presentation/components/auth/BackgroundPaper'
import { Ionicons } from '@expo/vector-icons'

const RegisterPage = () => {
  
  const [ isPasswordShown, setIsPasswordShown ] = useState<boolean>(false)

  return (
    <ScrollView>
      <BackgroundPaper 
        titleFirstPart='Registra'
        titleSecondPart='una cuenta nueva'
        description='Da de alta un nuevo correo para crear una cuenta'
      />
      <View className='rounded-xl mt-[-25%] w-[90%] m-auto bg-white p-6 shadow mb-8'>
        <View className='mb-6'>
          <Text className='font-poppins-bold mb-2 text-sm'>Nombre Completo</Text>
          <TextInput 
            textContentType='emailAddress'
            className='p-3 rounded-lg border border-gray-300'
            placeholder='correo@correo.com'
          />
        </View>
        <View className='mb-6'>
          <Text className='font-poppins-bold mb-2 text-sm'>Correo</Text>
          <TextInput 
            keyboardType='email-address'
            className='p-3 rounded-lg border border-gray-300'
            placeholder='correo@correo.com'
          />
        </View>
        <View className='mb-8'>
          <Text className='font-poppins-bold mb-2 text-sm'>Contraseña</Text>
          <View className='pr-2 flex flex-row items-center gap-2 rounded-lg border border-gray-300 w-full'>
            <TextInput 
              className='w-full p-3'
              secureTextEntry={!isPasswordShown}
              placeholder='Ingrese su contraseña'
            />
            {
              isPasswordShown
              ? (
                <Ionicons 
                onPress={() => setIsPasswordShown(false)} 
                  size={20} 
                  name='eye-outline' 
                  />
                )
              : (
                <Ionicons 
                  onPress={() => setIsPasswordShown(true)} 
                  size={20} 
                  name='eye-off-outline'
                />
              )
            }
          </View>
        </View>
        <CustomButton variant='contained' color='secondary'>Crear cuenta</CustomButton>
      </View>
    </ScrollView>
  )
}

export default RegisterPage