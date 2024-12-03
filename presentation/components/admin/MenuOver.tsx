import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native'

interface Props {
  visible: boolean;
  setIsMenuOverShown: (status: boolean) => void;
}

const MenuOver = ({visible, setIsMenuOverShown}: Props) => {

  const onNavigate = ( path: string ) => {
    router.push( path );
    setIsMenuOverShown(false);
  }
 
  return (
    <View className={`${visible ? "opacity-100" : "opacity-0"}  transition-all absolute right-3 bottom-[-110] bg-white shadow-xl py-3 px-5 rounded-sm z-20 w-40`}>
      <Text className='font-poppins-bold text-xs pb-1 mb-2 text-secondary'>Opciones</Text>
      <TouchableOpacity className='flex flex-row items-center justify-between py-1 border-b mb-[8px]'>
        <Text className='font-poppins-regular text-xs'>Cerrar Sesión</Text>
        <Ionicons name='log-out-outline' size={15} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('/admin/contacto')} className='flex flex-row items-center justify-between py-1 border-b mb-[8px]'>
        <Text className='font-poppins-regular text-xs'>Contacto</Text>
        <Ionicons name='call-outline' size={15} />
      </TouchableOpacity>
    </View>
  )
}

export default MenuOver