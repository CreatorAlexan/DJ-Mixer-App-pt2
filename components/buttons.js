import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {Audio} from "expo-av";

class Button extends React.Component{
  displayAlert = ()=>{
    alert("You stopped the sound!")
  }
  playSound = async(url)=>{
    await Audio.Sound.createAsync(
      {uri: url},
      {shouldPlay:true}
    )
  }

 render(){
   return(
     <View>
        <TouchableOpacity style={[styles.mscButton,{backgroundColor:this.props.color1}]} onPress={()=>{
          Audio.setIsEnabledAsync(true)
           var url = "https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/DJ%20Scratching.wav-18609-Free-Loops.com.mp3"
          this.playSound(url)
          
        }} >
        <Text style={styles.buttonTxt}>DJ Scratch</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[styles.mscButton,{backgroundColor:this.props.color2}]} onPress={()=>{
          Audio.setIsEnabledAsync(true)
          var url = "http://purewicked.com/mydigitalunderground/Prime%20Loops%20-%20Dubstep%20Illusions/Drum%20Loops/Bpm137_Subend_Break_PL.wav"
          this.playSound(url)
        }} >
        <Text style={styles.buttonTxt}>Drums</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.mscButton,{backgroundColor:this.props.color3}]} onPress={()=>{
          Audio.setIsEnabledAsync(true)
          var url = "http://www.guitarsecrets.com/scales/fmajor.wav"
          this.playSound(url)
        }}>
        <Text style={styles.buttonTxt}>Guitar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.mscButton,{backgroundColor:this.props.color4}]} onPress={()=>{
          Audio.setIsEnabledAsync(true)
          var url = "https://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Piano%20Key%20C5-2868-Free-Loops.com.mp3"
          this.playSound(url)
        }}>
        <Text style={styles.buttonTxt}>Piano</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.mscButton,{backgroundColor:this.props.color5}]} onPress={()=>{
          Audio.setIsEnabledAsync(true)
          var url = "http://www.whyyouhearwhatyouhear.com/chapterfiles/chpt17/sounds/clarinetpseudomulti.wav"
          this.playSound(url)
        }}>
        <Text style={styles.buttonTxt}>Flute</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.stopButton,{backgroundColor:this.props.color6}]} onPress={()=>{
          Audio.setIsEnabledAsync(false)
        }}>
        <Text style={styles.stopButtonTxt}>STOP MUSIC</Text>
        </TouchableOpacity>
     </View>
   )
 }
}

const styles = StyleSheet.create({
  mscButton:{
    width:200,
    height:50, //Make 80
    borderRadius:200,
    alignItems:"center",
    marginTop:20,
    marginLeft:65,
    // add padding 15px
    borderWidth:5,
    borderColor:'black'
  },
  stopButton:{
    width:150,
    height:35,
    borderRadius:200,
    alignItems:'center',
    marginTop:15,
    marginLeft:90,
    borderWidth:3,
    borderColor:"black"
  },
  buttonTxt:{
    fontWeight:"bold",
    fontSize:30
  },
  stopButtonTxt:{
    fontWeight:"bold",
    fontSize:20
  }
})

export default Button;