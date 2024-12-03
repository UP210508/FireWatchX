import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StatItemProps {
  icon: string;
  title: string;
  value: string | number;
  color: string;
}

const StatItem = ({ icon, title, value, color }: StatItemProps) => (
  <View className="flex items-center bg-white shadow-md p-4 rounded-lg">
    <Ionicons name={icon} size={30} color={color} />
    <Text className="font-poppins-bold text-sm text-gray-800 mt-2">{title}</Text>
    <Text className="font-poppins-regular text-xl text-gray-600">{value}</Text>
  </View>
);

const DashboardStats = () => {
  const stats = [
    { icon: 'alert-circle', title: 'Total Alertas Emitidas', value: 102, color: '#ff6347' },
    { icon: 'warning-outline', title: 'Alertas Críticas Actuales', value: 5, color: '#ff4500' },
    { icon: 'pie-chart', title: 'Sensores Operativos', value: 5, color: '#32cd32' },
  ];

  return (
    <View className="flex flex-wrap justify-between mt-5">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          color={stat.color}
        />
      ))}
    </View>
  );
};

export default DashboardStats;