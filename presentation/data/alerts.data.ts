import { Alert } from "@/infraestructure/interfaces/alert.interface";

export const alerts: Alert[] = [
  {
    id: 1,
    type: 'info',
    title: 'Temperatura 30°C',
    description: 'La temperatura en la locacion 1 ha sido obtenida',
    time: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    type: 'info',
    title: 'Temperatura 28.4°C',
    description: 'Sensor 2 toma de lectura en la locacion 3',
    time: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    type: 'warn',
    title: 'Temperatura 14.4°C',
    description: 'Sensor 2 toma de lectura en la locacion 3',
    time: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    type: 'warn',
    title: 'Temperatura Media 18.1°C',
    description: 'Sensor 2 toma de lectura en la locacion 3',
    time: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    type: 'warn',
    title: 'Mantenimiento preventivo',
    description: 'Sensor 2 toma de lectura en la locacion 3',
    time: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    type: 'error',
    title: 'Temperatura 8.4°C',
    description: 'Sensor 2 toma de lectura en la locacion 3',
    time: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    type: 'error',
    title: 'Temperatura Baja 2.4°C',
    description: 'Sensor 2 toma de lectura en la locacion 3',
    time: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    type: 'error',
    title: 'Daño colateral',
    description: 'Sensor 2 toma de lectura en la locacion 3',
    time: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    type: 'error',
    title: 'Sensor dañado',
    description: 'Sensor 2 toma de lectura en la locacion 3',
    time: new Date().toLocaleDateString(),
  },
]