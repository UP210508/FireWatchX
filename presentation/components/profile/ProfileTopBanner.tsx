import { Text } from 'react-native'
import ProfileImage from './ProfileImage'
import { Profile } from '@/infraestructure/interfaces/profile.interface'

const ProfileTopBanner = ({name, profession}: Profile) => {
  return (
    <>
      <ProfileImage />
      <Text className='font-poppins-bold text-xl mb-1'>{name.split(' ')[0] + " " + name.split(' ')[2]}</Text>
      <Text className='font-poppins-regular text-xs text-gray-600'>{profession}</Text>
    </>
  )
}

export default ProfileTopBanner