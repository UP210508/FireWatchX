import MenuNavigation from '@/presentation/components/admin/MenuNavigation'
import { Stack } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'

const AppLayout = () => {
  return (
    <ScrollView>
      <MenuNavigation />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name='nav/index'
          options={{
            title: 'Navegación',
          }}
        />
        <Stack.Screen 
          name='dashboard/index'
          options={{
            title: 'Dashboard'
          }}
        />
        <Stack.Screen 
          name='perfil/index'
          options={{
            title: 'Perfil'
          }}
        />
        <Stack.Screen 
          name='alertas/index'
          options={{
            title: 'Alertas',
          }}
        />
        <Stack.Screen 
          name='ayuda/index'
          options={{
            title: 'Ayuda'
          }}
        />
        <Stack.Screen 
          name='sensores/index'
          options={{
            title: 'Sensores'
          }}
        />
        <Stack.Screen 
          name='sensores/[id]'
          options={{
            title: 'Sensores'
          }}
        />
        <Stack.Screen 
          name='paquetes/index'
          options={{
            title: 'Paquetes'
          }}
        />
        <Stack.Screen 
          name='contacto/index'
          options={{
            title: 'Contacto'
          }}
        />
      </Stack>
    </ScrollView>
  )
}

export default AppLayout