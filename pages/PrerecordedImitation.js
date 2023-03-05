import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Animated} from 'react-native';
import { useRoute } from "@react-navigation/native";
import PlayPrerecordedRecording from "../components/PlayPrerecordedRecording";
import PopupInstruction from "../components/PopupInstruction";
import menu from '../assets/menu.png'
import back from '../assets/back.png'

const PrerecordedImitationPage = ({navigation}) => {
  const route = useRoute();

  const [counter, setCounter] = React.useState(3);

  const [LeftArray, setLeftArray] = React.useState([]);
  
  const [RightArray, setRightArray] = React.useState([]);

  function LeftButtonNoClickHandler() {
    let interval;
    interval = setInterval(() => {
      setLeftArray(oldArr => [...oldArr, 0]);
    }, 100);
    console.log('Starting addition to left array as timer has reached 0');
    return () => clearInterval(interval);
  }
  
  function RightButtonNoClickHandler() {
    let interval;
    interval = setInterval(() => {
      setRightArray(oldArr => [...oldArr, 0]);
    }, 100);
    console.log('Starting addition to right array as timer has reached 0');
    return () => clearInterval(interval);
  }
  
  const timer = () => {
    let interval = setInterval(() => {
      setCounter(lastTimerCount => {
          lastTimerCount <= 1 && clearInterval(interval)
          if (lastTimerCount - 1 == 0){
            LeftButtonNoClickHandler()
            RightButtonNoClickHandler()
          }
          return lastTimerCount - 1
      })
    }, 1000) //each count lasts for a second
    //cleanup the interval on complete
    console.log("Starting Countdown Now");
    return () => clearInterval(interval)
  }

  const leftButtonClickedHandler = () => {
    LeftArray.push(1);
    console.log('You have tapped the left button', LeftArray);
  };

  const rightButtonClickedHandler = () => {
    RightArray.push(1);
    console.log('You have tapped the right button', RightArray);
  };

  return(
    <View style={styles.container}>
    
      <View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 20,
        }}>
        <TouchableOpacity>
          <ImageBackground 
            source={back} 
            style={styles.backContentContainer}
            onPress={() => navigation.push('Home')}
            />
        </TouchableOpacity>
      </View>

      <Animated.View style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 20,
        }}>
        <ImageBackground 
          source={menu} 
          style={styles.menuContentContainer}/>
      </Animated.View>

      <Text style={[styles.songTitleText]}> {route.params.SongTitle}</Text>

      <View style={[styles.topContainer]}>
        
        <PlayPrerecordedRecording SongToPlay = {route.params.SongTitle}/>
            
        <View style={{flexDirection: 'row'}}> 
          <TouchableOpacity 
            style={styles.submit}
            onPress={timer}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Recreate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submit}
            onPress={() => navigation.push('PrerecordedErrorPage', {SongTitle: route.params.SongTitle, StudentLeftArray: LeftArray, StudentRightArray: RightArray})}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Stop</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={[styles.timerText]}>Start Tapping In: {counter}</Text>
        {/* <Text>{LeftArray}</Text>
        <Text>{RightArray}</Text> */}

        <PopupInstruction/>

          <TouchableOpacity
            onPress={leftButtonClickedHandler}
            style={styles.roundButton1}>
            <Text>Left</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={rightButtonClickedHandler}
            style={styles.roundButton2}>
            <Text>Right</Text>
          </TouchableOpacity>

      </View>

      <View style={styles.bottomView}>
        <Text>NTU Final Year Project 2022-2023</Text>
        <Text>Developed By: Bachhas Nikita</Text>
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f7ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'top',
    },
    secondTopContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'top',
      paddingTop: 10, 
    },
    bottomView: {
      width: '100%',
      height: 65,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fill: {
      flex: 1,
      margin: 16
    },
    button: {
      margin: 16
    }, 
    songTitleText: {
      color: '#1f3872',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 22,
      marginBottom: 10,
      paddingTop: 85
    },
    submitText: {
      color: '#1f3872',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18
    }, 
    timerText: {
      color: '#000000',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
      paddingTop: 20,
    }, 
    submit: {
      marginRight: 15,
      marginLeft: 15,
      marginTop: 15,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
      height: 70, 
      width: 150,
      justifyContent: 'center',
      alignItems: 'center'
    },
    roundButton1: {
      marginBottom: 20,
      width: 205,
      height: 205,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#fff',
      borderColor: "#ccc",
      borderWidth: 2
    },
    roundButton2: {
      marginBottom: 70,
      width: 205,
      height: 205,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#fff',
      borderColor: "#ccc",
      borderWidth: 2
    },
    backContentContainer:{
      width: 26, 
      height: 26,
      tintColor: 'black',
      marginTop: 37,
      marginLeft: 320
    },
    menuContentContainer:{
      width: 20, 
      height: 20,
      tintColor: 'black',
      marginTop: 40,
    },
  });

export default PrerecordedImitationPage