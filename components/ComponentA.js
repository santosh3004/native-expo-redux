import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ComponentA = () => {
  const counterVal=useSelector(state=>state)
  return (
    <View>
      <Text>ComponentA: {counterVal}</Text>
    </View>
  )
}

export default ComponentA