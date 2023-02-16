import React from "react";
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import { useRoute } from "@react-navigation/native";
import PlayPrerecordedRecording from "../components/playPrerecordedRecording";
import PopupInstruction from "../components/popupInstruction";

const PrerecordedImitationPage = ({navigation}) => {
  
  const route = useRoute();

  const LeftArray = []

  const RightArray = []

  const [counter, setCounter] = React.useState(3);
    
  const timer = () => {
    let interval = setInterval(() => {
      setCounter(lastTimerCount => {
          lastTimerCount <= 1 && clearInterval(interval)
          return lastTimerCount - 1
      })
    }, 1000) //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval)
  }

  // React.useEffect(() => {
  //   let interval = setInterval(() => {
  //     setCounter(lastTimerCount => {
  //         lastTimerCount <= 1 && clearInterval(interval)
  //         return lastTimerCount - 1
  //     })
  //   }, 1000) //each count lasts for a second
  //   //cleanup the interval on complete
  //   return () => clearInterval(interval)
  // }, []);

  // async function addItemtoRightArray () {
  //   if (rightArray > 0) {
  //     const id = setInterval(() => setCounter(counter => counter - 1), 1000);
  //     setIntervalId(id)
  //     console.log("Starting Timer", id);
  //   }
  // }

  // const addItemtoArrays = () => {
  //   if (counter < 0) {
  //     LeftArray.push(0);
  //     RightArray.push(0);
  //     console.log('Not tapping any button', LeftArray, RightArray);
  //   }
  // }

  const leftButtonClickedHandler = () => {
    LeftArray.push(1);
    console.log('You have tapped the left button', LeftArray);
    // do something
  };

  const rightButtonClickedHandler = () => {
    RightArray.push(1);
    console.log('You have tapped the right button', RightArray);
    // do something
  };

  return(
    <View style={styles.container}>

      <View style={[styles.topContainer]}>
        <Text style={[styles.songTitleText]}> {route.params.SongTitle} </Text>
  
        <PlayPrerecordedRecording songToPlay = {route.params.SongTitle} />
            
        <View style={{flexDirection: 'row'}}> 
          <TouchableOpacity
            style={styles.submit}
            onPress={timer}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Recreate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submit}
            onPress={() => navigation.push('PrerecordedErrorPage', {LeftArray: LeftArray}, {RightArray: RightArray})}
            underlayColor='#fff'>
            <Text style={[styles.submitText]}>Stop</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.timerText]}>Start Tapping In: {counter}</Text>

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
      paddingTop: 100
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
      fontSize: 20
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
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#fff',
      borderColor: "#ccc",
      borderWidth: 2
    },
    roundButton2: {
      marginBottom: 80,
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#fff',
      borderColor: "#ccc",
      borderWidth: 2
    },
  });

export default PrerecordedImitationPage