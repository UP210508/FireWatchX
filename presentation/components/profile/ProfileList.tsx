import { View, Text } from 'react-native'
import ProfileField from './ProfileField'
import { Profile } from '@/infraestructure/interfaces/profile.interface'

const ProfileList = ({ name, email, phoneNumber, profession, plan }: Profile) => {
  return (
    <View className='p-5'>
      <Text className='text-center font-poppins-bold text-secondary mb-2'>Información de la cuenta</Text>
      <ProfileField category='Plan' value={plan} />
      <ProfileField category='Nombre' value={name} />
      <ProfileField category='Correo Electrónico' value={email} />
      <ProfileField category='Número de teléfono' value={phoneNumber} />
      <ProfileField category='Profesión' value={profession} />
    </View>
  )
}

export default ProfileList