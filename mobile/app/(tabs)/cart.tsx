import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SafeScreen from '@/components/SafeScreen'
export class CartScreen extends Component {
  render() {
    return (
      <SafeScreen>
        <Text className='text-white'>CartScreen</Text>
        

      </SafeScreen>
    )
  }
}

export default CartScreen