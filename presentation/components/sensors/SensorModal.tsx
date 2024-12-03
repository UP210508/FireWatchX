import { Sensor } from "@/infraestructure/interfaces/sensor.interface"
import { Pressable, Text, View } from "react-native"
import CustomButton from "../shared/CustomButton";

interface Props {
  sensor: Sensor | undefined,
  openModal: ( status: boolean ) => void;
}

const formatText = function( text: string ): string {
  
  const arr = text.split(". ")
  return arr.join(".\n\n")

}

const SensorModal = ({ sensor, openModal}: Props ) => {

  const { name, functionality, data } = sensor!

  return (
    <>
      <View className="fixed top-0 left-0 z-40 w-full h-full bg-black opacity-60"></View>
      <View className="fixed z-50 top-[50%] left-[50%] p-4 rounded-md w-[85%] translate-x-[-50%] translate-y-[-45%] bg-white">
        
        <View className="flex flex-row justify-between items-center mb-2 pb-2 border-b border-gray-400">
          <Text className="font-poppins-bold text-xl text-secondary">Sensor { name }</Text>
        </View>

        <View className="mb-3 border-b border-gray-400 pb-3">
          <Text className="font-poppins-bold px-2">Información</Text>
          <Text className="text-xs p-2 font-poppins-regular">{ formatText(functionality) }</Text>
        </View>

        <View className="mb-3">
          <Text className="font-poppins-bold px-2">Datos</Text>
          <Text className="text-xs p-2 font-poppins-regular">{ formatText(data) }</Text>
        </View>

        <CustomButton color="secondary" onPress={ () => openModal(false)} >
          Cerrar
        </CustomButton>
      </View>
    </>
  )
}

export default SensorModal