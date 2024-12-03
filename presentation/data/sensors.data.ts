import { Sensor } from '../../infraestructure/interfaces/sensor.interface';

export const sensors: Sensor[] = [
  {
    id: 1,
    name: 'DHT11',
    description: "Sensor de temperatura y humedad",
    imageCard: "https://www.elecbee.com/image/cache/catalog/Sensor-and-Detector-Module/5pcs-DHT11-Temperature-and-Humidity-Sensor-Module-Robotdyn-for-Arduino---products-that-work-with-off-1684557-3152-800x800.jpeg",
    image: "https://www.az-delivery.de/cdn/shop/products/ky-015-dht-11-temperatursensor-modul-615783.jpg?v=1679398815&width=1200",
    functionality: "El DHT11 es un sensor digital de temperatura y humedad relativa de bajo costo y fácil uso. Integra un sensor capacitivo de humedad y un termistor para medir el aire circundante, y muestra los datos mediante una señal digital en el pin de datos (no posee salida analógica).",
    data: "Voltaje de Operación: 3V – 5V DC Rango de medición de temperatura: 0 a 50 °C Precisión de medición de temperatura: ±2.0 °C Resolución Temperatura: 0.1°C Rango de medición de humedad: 20% a 90% RH. Precisión de medición de humedad: 5% RH. Resolución Humedad: 1% RH Tiempo de sensado: 1 seg Interfaz digital: Single-bus (bidireccional) Dimensiones: 16*12*5 mm Peso: 1 gr..",
  },
  {
    id: 2,
    name: 'KY-026',
    description: "Sensor de detección de flama",
    imageCard: "https://novatronicec.com/wp-content/uploads/2020/10/modulo-ky-026-sensor-de-llama-detector-de-temperatura-infrarrojo-de-4-pines.jpg",
    image: "https://uelectronics.com/wp-content/uploads/KY-026-Flame-Sensor-500x500.jpg",
    functionality: "El Módulo KY-026 es un Sensor de Flama que por medio de un LED receptor infrarrojo detecta longitudes de onda de llama en un rango de 760nm a 1100nm. Las salidas de este sensor son digital y analógica e incluye un potenciometro para ajuste de la sensibilidad del sensor. El módulo KY-026 Sensor de Flama es útil para sistema de detección de incendios, como una medida de seguridad.",
    data: "Voltaje de operación: 3.3 a 5.5  V. Corriente de Operación: 15 mA. Rango de detección: 760 nm a 1100 nm. Ajuste de sensibilidad: Si.Distancia de detección máxima: 1 metro. Dimensiones: 15 mm x 36 mm.Peso: 3 g",
  },
  {
    id: 3,
    name: 'Cámara',
    description: "Obtención de imagenes claras",
    imageCard: 'https://www.330ohms.com/cdn/shop/files/photo_RPi_CameraModule3_01_592x592.png?v=1707926493',
    image: 'https://www.geekfactory.mx/wp-content/uploads/camara-para-raspberry-pi-v2-8-mp-1080p-white-700x700.jpg.webp',
    functionality: "Este modulo incluye un pequeño cuadrado azul que puede usar con la cámara para monitorear la salud de las plantas verdes. El Pi NoIR es muy popular entre los aficionados a la vida silvestre: con algunos LED infrarrojos, puede monitorear lo que hacen los animales nocturnos en su jardín sin molestarlos.",
    data: "Cámara: 8 megapixeles. Sensor: IMX219. Imagen fija: 3280 × 2464. Captura vídeo: 1080p30, 720p60 y 640x480p90. Sin infrarrojos, compatible con visión nocturna. Dimensión: 25mm x 24mm x 9mm. Peso: 3g",
  },
]