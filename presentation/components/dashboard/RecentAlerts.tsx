import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const RecentAlerts = () => {
  const recentAlerts = [
    { id: 1, icon: 'notifications-outline', message: 'Nueva alerta en sensor #5', color: '#FFA500' },
    { id: 2, icon: 'checkmark-circle-outline', message: 'Sensor #2 operativo', color: '#32CD32' },
    { id: 3, icon: 'close-circle-outline', message: 'Sensor #8 con problemas', color: '#FF6347' },
  ];

  return (
    <View className="mt-5">
      <Text className="font-poppins-bold text-lg text-gray-800 mb-2">Alertas Recientes</Text>
      <FlatList
        data={recentAlerts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex flex-row items-center p-3 bg-white rounded-md shadow-md mb-2">
            <Ionicons name={item.icon} size={24} color={item.color} />
            <Text className="font-poppins-regular text-sm ml-3">{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RecentAlerts;
