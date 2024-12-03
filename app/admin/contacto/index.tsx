import ReturnBack from '@/presentation/components/admin/ReturnBack'
import ContactCard from '@/presentation/components/shared/ContactCard'
import { developers } from '@/presentation/data/developers.data'
import { View, Text, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'


const ContactoScreen = () => {
  return (
    <View>
      <ReturnBack title='Contacto' />
      <View className='flex flex-1 px-3'>

        <FlatList
          data={developers} 
          keyExtractor={(item) => `${item.id}`}
          renderItem={ ({item}) => <ContactCard {...item} />}
        />

      </View>
    </View>
  )
}

export default ContactoScreen