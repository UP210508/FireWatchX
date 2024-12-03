import { Profile } from '@/infraestructure/interfaces/profile.interface'
import { View, Text, TextInput } from 'react-native'
import CustomButton from '../shared/CustomButton';
import { useForm } from '@/infraestructure/hooks/useForm';

interface Props {
  profile: Profile;
  openModal: ( status: boolean ) => void;
}

const ProfileModal = ({ profile, openModal }: Props) => {

  const { formState, onInputChange } = useForm({
    name: profile.name,
    phoneNumber: profile.phoneNumber,
    profession: profile.profession,
  });

  const onEditProfile = function() {

    const { name, phoneNumber, profession } = formState;

    // TODO: Disparar alerta
    if ( !name.trim().length ) return

    if ( phoneNumber.trim().length > 10 ) {
      // TODO: Disparar alerta
      return
    }
    
    // TODO: Disparar alerta
    if ( !profession.trim().length ) return

  }

  return (
    <>
      <View className="fixed top-0 left-0 w-full h-full bg-black opacity-60"></View>
      <View className="fixed z-50 top-[50%] left-[50%] p-4 rounded-md w-[85%] translate-x-[-50%] translate-y-[-45%] bg-white">

        <View>
          <Text className='font-poppins-bold mb-5'>Editar Informacion</Text>

          <View className='mb-2'>
            <Text className='font-poppins-bold text-xs mb-1'>Nombre del usuario</Text>
            <TextInput 
              onChangeText={ text => onInputChange(text, "name") }
              value={formState.name}
              className='border border-gray-300 rounded-md p-1'
            />
          </View>
          <View className='mb-2'>
            <Text className='font-poppins-bold text-xs mb-1'>Número de telefono</Text>
            <TextInput 
              keyboardType='phone-pad'
              onChangeText={ text => onInputChange(text, "phoneNumber") }
              className='border border-gray-300 rounded-md p-1'
              value={formState.phoneNumber}
            />
          </View>
          <View className='mb-5'>
            <Text className='font-poppins-bold text-xs mb-1'>Profesión</Text>
            <TextInput 
              onChangeText={ text => onInputChange(text, "profession") }
              className='border border-gray-300 rounded-md p-1'
              value={formState.profession}
            />
          </View>

        </View>

        <View className="flex flex-1 flex-row gap-2">
          <CustomButton onPress={ onEditProfile } color="secondary" className="w-[50%]">Guardar</CustomButton>
          <CustomButton onPress={ () => openModal(false) } color="black" className="w-[50%]">Cancelar</CustomButton>
        </View>

      </View>
    </>
  )
}

export default ProfileModal