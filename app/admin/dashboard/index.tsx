import React from 'react';
import { View } from 'react-native';
import ReturnBack from '@/presentation/components/admin/ReturnBack';
import Dashboard from '@/presentation/components/dashboard/Dashboard';

const DashboardScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Navegación */}
      <ReturnBack title="Dashboard" />

      {/* Contenido del Dashboard */}
      <Dashboard />
    </View>
  );
};

export default DashboardScreen;