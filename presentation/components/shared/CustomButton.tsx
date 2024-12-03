import React from 'react';
import { Text, Pressable, View, PressableProps } from 'react-native'

interface Props extends PressableProps {
  children: string;
  color?: string;
  variant?: "contained" | "outline";
  className?: string;
  textColor?: string;
  bold?: boolean;
}

const CustomButton = React.forwardRef(({
  children, 
  className,
  onPress,
  onLongPress,
  variant = 'contained', 
  color = 'primary', 
  bold = true,
}: Props, ref: React.Ref<View> ) => {

  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    black: "bg-black"
  }[color];

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary'
  }[color]

  const borderColor = {
    primary: 'border-primary',
    secondary: 'border-secondary',
  }[color]

  if ( variant === 'outline' ) {
    return (
      <Pressable 
        className={`p-3 rounded-md ${borderColor} border-2 active:opacity-80`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className={`${textColor} text-center ${bold ? "font-poppins-bold" : "font-poppins-regular"}`}>{children}</Text>
      </Pressable>
    )
  }

  return (
    <Pressable 
      className={`p-3 rounded-md ${btnColor} ${className} active:opacity-80`}
      onPress={onPress}
      onLongPress={onLongPress}
      ref={ref}
    >
      <Text className={`text-white text-center ${bold ? "font-poppins-bold" : "font-poppins-regular"}`}>{children}</Text>
    </Pressable>
  )
})

export default CustomButton