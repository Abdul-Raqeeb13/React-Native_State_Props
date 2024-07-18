import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {

  // this is state
  const [name, setName] = useState("Abdul")
  // this is variable
  let quote = "Not changeable"

  const change = () => {
    // its value is change in components where its is used , If state change component rerender 
    setName("Abdul Raqeeb")
    // its value is changed but component not rerender , If variable change component not rerender
    quote = "Chnageable"

    // this is the main diff b/w the state and variable
  }
  return (

    <View>
      <Text>{name}</Text>
      <Text>{quote}</Text>
      <Button title="Press Me" color="green" onPress={change}></Button>

      {/* We can not use the state outside its component directly without props but we can transfer data using props */}
      <App2 data={name} />
    </View>

  )
}

// This is nested component we can create more than 1 components in a single file or component
const App2 = (props) => {
  return (
    <View>
      <Text>This Name : {props.data} comes from the Components App using Props</Text>
    </View>
  )
}



