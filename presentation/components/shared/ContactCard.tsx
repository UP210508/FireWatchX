import { Developer } from '@/infraestructure/interfaces/developer.interface';
import { View, Text, Image } from 'react-native';

const ContactCard = ({ img, email, id, name, phone, profession }: Developer) => {
  return (
    <View className="flex flex-row justify-between items-center p-2 bg-white shadow-md rounded-lg mb-5">
      <View className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          style={{ width: 40, height: 40 }}
          source={{ uri: img }}
        />
        <View>
          <Text className="font-poppins-bold text-[10px]">{name}</Text>
          <Text className="font-poppins-regular text-[10px]">
            {profession}
          </Text>
        </View>
      </View>
      <View>
        <Text className="font-poppins-regular text-[10px]">
          {email}
        </Text>
        <Text className="font-poppins-regular text-[10px] text-right">
          Tel: <Text>{phone}</Text>
        </Text>
      </View>
    </View>
  );
};

export default ContactCard;
