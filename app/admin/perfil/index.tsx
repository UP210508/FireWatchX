import { useState } from 'react'
import { View } from 'react-native'
import ReturnButton from '@/presentation/components/shared/ReturnButton'
import ProfileList from '@/presentation/components/profile/ProfileList'
import { profile } from '@/presentation/data/profile.data'
import ProfileTopBanner from '@/presentation/components/profile/ProfileTopBanner'
import CustomButton from '@/presentation/components/shared/CustomButton'
import ProfileModal from '@/presentation/components/profile/ProfileModal'

const ProfileScreen = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <View className='relative'>
     { !isModalOpen &&  <ReturnButton className='absolute top-3 left-3 z-30' />} 
      <View className='top-0 left-0 w-full h-[30vh] bg-gradient-to-l from-indigo-600 to-pink-500'></View>
      <View className='bg-white rounded-t-3xl w-full py-3 px-5 m-auto mt-[-20%]'>
        <View className='flex justify-center items-center translate-y-[-50%]'>
          <ProfileTopBanner {...profile} />
        </View>
        <View className='mt-[-20%]'>
          <ProfileList {...profile} />
        </View>
        <View className='px-5'>
          <CustomButton color='secondary' onPress={() => setIsModalOpen(true)}>Editar Perfil</CustomButton>
        </View>
      </View>

      { isModalOpen && <ProfileModal profile={profile} openModal={ setIsModalOpen } /> }
    </View>
  )
}

export default ProfileScreen