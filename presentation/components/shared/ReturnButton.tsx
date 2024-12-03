import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable } from 'react-native';

interface Props {
  className?: string;
}

const ReturnButton = ({ className }: Props) => {
  return (
    <Pressable
      onPress={() => router.back()}
      className={`${className} shadow-md bg-slate-800 p-2 rounded-full flex flex-row items-center gap-2`}
    >
      <Ionicons color={'white'} name="arrow-back-outline" size={15} />
    </Pressable>
  );
};

export default ReturnButton;
