import { Alert } from '@/infraestructure/interfaces/alert.interface'
import { FlatList } from 'react-native-gesture-handler'
import AlertCard from './AlertCard'
import { View } from 'react-native'

interface Props {
  list: Alert[]
}

const HorizontalListAlert = ( { list }: Props ) => {
  return (
    <View className='p-2 py-5'>
      <FlatList
        className='py-3'
        horizontal
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={ (item) => `${item.id}`}
        renderItem={({item}) => <AlertCard {...item} />}
      />
    </View>
  )
}

export default HorizontalListAlert