import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../store/action'
const ComponentB = () => {
  const counterVal=useSelector(state=>state)
  const dispatch =useDispatch();
  return (
    <View>
      <Text>ComponentB: {counterVal}</Text>
      <Button title='+' onPress={()=>dispatch(increment())}/>
      <Button title='-' onPress={()=>dispatch(decrement())}/>
    </View>
  )
}

export default ComponentB