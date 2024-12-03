import { useState } from "react"

export const useForm = ( initialState: {[key: string]: string} ) => {

  const [formState, setFormState] = useState( initialState )

  const onInputChange = (text: string, name: string) => {
    setFormState({
      ...formState,
      [name]: text
    })

  }

  return {
    formState,
    ...formState,

    onInputChange,
  }

}