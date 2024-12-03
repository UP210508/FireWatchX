import React from 'react';
import { View, Text } from 'react-native';
import DashboardStats from './DashboardStats';
import RecentAlerts from './RecentAlerts';

const Dashboard = () => {
  return (
    <View className="p-4">
      <Text className="font-poppins-bold text-lg text-gray-900">Estadísticas Generales</Text>
      <DashboardStats />
      <RecentAlerts />
    </View>
  );
};

export default Dashboard;