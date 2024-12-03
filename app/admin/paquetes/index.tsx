import { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ReturnBack from '@/presentation/components/admin/ReturnBack'
import PackCard from '@/presentation/components/packs/PackCard'
import PackSuscribe from '@/presentation/components/packs/PackSuscribe'
import PackFeatures from '@/presentation/components/packs/PackFeatures'
import { packs } from '@/presentation/data/packs.data'

const PaquetesScreen = () => {

  const [active, setActive] = useState<string>("")
  const [content, setContent] = useState<any>()

  useEffect(() => {
    const packFeatures = packs.find( pack => pack.name === active )?.features
    setContent( packFeatures );
  }, [active])

  return (
    <View>
      <ReturnBack title='Elige tu paquete' />
      
      <View className='px-5'>
        <Text className='font-poppins-regular text-xs mb-2'>Actualmente no tienes plan contratado. Revisa las características y contrata uno.</Text>
        <FlatList 
          className='py-5'
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={ (item) => `${item.id}`}
          data={ packs }
          renderItem={ ({item}) => (
            <Pressable onPress={() => setActive(item.name)}>
              <PackCard pack={item} active={ active } />
            </Pressable>
          )}
        />

        <View className='py-5'>
          <Text className='font-poppins-bold text-secondary mb-2'>Elige tu suscripción</Text>
          <PackFeatures active={active} features={content} />
        </View>
      </View>

    </View>
  )
}

export default PaquetesScreen