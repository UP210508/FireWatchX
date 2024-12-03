import { Pack } from '@/infraestructure/interfaces/pack.interface'
import { View, Text } from 'react-native'

interface Props {
  pack: Pack;
  active: string;
}

const PackCard = ({ pack, active = "enterprise" }: Props) => {

  const { name, pricePerMonth, pricePerYear } = pack;
  const cardColor = active === name ? 'bg-secondary-800' : 'bg-gray-800'
  const borderColor = active === name ? 'border-secondary-400' : 'border-gray-400'
  const lineColor = active === name ? 'bg-secondary-400' : 'bg-gray-400'

  return (
    <View className={`transition-all relative rounded-md border-secondary-400 border ${borderColor} shadow-md mx-2 w-48 p-3`}>
      <Text className={`absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] ${cardColor} text-white font-poppins-regular px-3 rounded-full text-xs`}>{name}</Text>

      <View className='flex items-center py-2'>
        <Text className='font-poppins-regular text-xs mb-2'>Anual</Text>
        <Text className='text-xl font-poppins-bold text-gray-900 mb-2'>{ new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN'}).format(pricePerMonth)}<Text className='text-xs text-gray-500 font-poppins-regular'>/ mes</Text></Text>
        <Text className='font-poppins-regular text-xs text-gray-600 mb-4'>(${pricePerYear} / año)</Text>
        <View className={`w-1/2 h-[2px] ${lineColor}`}></View>
      </View>

    </View>
  )
}

export default PackCard