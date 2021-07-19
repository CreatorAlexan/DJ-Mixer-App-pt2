import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from "./components/buttons"

export default class App extends React.Component{
  
render(){
  return(
    <View style={{backgroundColor:'white'}}>
      <Button color1 = "orange" color2 = "lime" color3 = "purple" color4 = "yellow" color5 = "turquoise" color6 = "white"/>
    </View>
  )
}
}