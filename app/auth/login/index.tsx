import { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import CustomButton from '@/presentation/components/shared/CustomButton'
import BackgroundPaper from '@/presentation/components/auth/BackgroundPaper'
import { Ionicons } from '@expo/vector-icons'
import { useForm } from '@/infraestructure/hooks/useForm'

const LoginPage = () => {

  const [ isPasswordShown, setIsPasswordShown ] = useState<boolean>(false)
  const { formState, onInputChange } = useForm({
    email: "",
    password: ""
  });

  return (
    <ScrollView>
      <BackgroundPaper 
        titleFirstPart='Ingresa'
        titleSecondPart='A tu cuenta'
        description='Ingresa tu correo y contraseña para ingresar a tu cuenta'
      />
      <View className='rounded-xl mt-[-25%] w-[90%] m-auto bg-white p-6 shadow'>
        <View className='mb-6'>
          <Text className='font-poppins-bold mb-2 text-sm'>Correo Electrónico</Text>
          <TextInput 
            onChangeText={ text => onInputChange(text, "email")}
            value={ formState.email }
            textContentType='emailAddress'
            className='p-3 rounded-lg border border-gray-300'
            placeholder='correo@correo.com'
          />
        </View>
        <View className='mb-8'>
          <Text className='font-poppins-bold mb-2 text-sm'>Contraseña</Text>
          <View className='pr-2 flex flex-row items-center gap-2 rounded-lg border border-gray-300 w-full'>
            <TextInput 
              onChangeText={ text => onInputChange(text, "password")}
              value={ formState.password }
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
        <CustomButton variant='contained' color='secondary'>Ingresar a cuenta</CustomButton>
      </View>
      <Text className='text-center p-2 inline-block w-fit m-auto my-10 bg-clip-border text-white font-poppins-black text-2xl bg-gradient-to-r from-indigo-600 to-pink-500'>&lt;FireWatchX /&gt;</Text>
    </ScrollView>
  )
}

export default LoginPage