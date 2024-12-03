import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

export interface Option {
  name: string;
  icon: string;
  color: string;
}

const NavigationItem = ({ name, icon, color }: Option) => {
  return (
    <TouchableOpacity
      style={{ borderColor: color }}
      onPress={() => router.push(`/admin/${name}`)}
      className="bg-white flex justify-center items-center border-4 shadow-md relative h-32 rounded-xl"
    >
      <Text className="font-poppins-bold text-sm pr-6 pb-5">
        {name.replace(name[0], name[0].toUpperCase())}
      </Text>
      <Ionicons
        className="absolute bottom-2 right-2 opacity-40"
        size={55}
        name={`${icon}-outline`}
      />
    </TouchableOpacity>
  );
};

export default NavigationItem;
