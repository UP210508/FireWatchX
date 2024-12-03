import { View, Text, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HorizontalListAlert from './HorizontalListAlert';

interface Props {
  titleSection: string;
  type: 'info' | 'warn' | 'error';
  alerts: any[];
}

const AlertTrack = ({ titleSection, type, alerts }: Props) => {
  return (
    <View className="px-5">
      <View className="flex flex-row justify-between items-center">
        <Text className="font-poppins-bold uppercase">{titleSection}</Text>
        <Pressable className="rounded-md flex flex-row items-center gap-2 px-2 bg-secondary">
          <Text className="font-poppins-regular text-[10px] text-white">
            Limpiar Alertas
          </Text>
        </Pressable>
      </View>
      <HorizontalListAlert list={alerts} />
    </View>
  );
};

export default AlertTrack;
