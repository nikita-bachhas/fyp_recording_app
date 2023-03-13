import React from "react";
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import correct from '../assets/correct.png'
import wrong from '../assets/wrong.png'

const DisplayRecordingsOne = () => {

  const beatMatchLeftCount = 80
  const beatMatchRightCount = 80
  const averageTotalBeatLeftCount = 100
  const averageTotalBeatRightCount = 100

  const [showCorrectLeft, setShowCorrectLeft] = React.useState(false);
  const [showCorrectRight, setShowCorrectRight] = React.useState(false);

  var beatMatchLeftPercent = (beatMatchLeftCount/averageTotalBeatLeftCount) * 100
  var beatMatchRightPercent = (beatMatchRightCount/averageTotalBeatRightCount) * 100

  // const CheckNumberofBeatsLeft = () => {
  //   if (beatMatchLeftPercent > 70){
  //     console.log("Beat Check Left Correct")
  //     setShowCorrectLeft(!showCorrectLeft);
  //   }
  //   else{
  //     console.log("Beat Check Left Done")
  //   }
  // }

  CheckNumberofBeatsLeft();

    return(
        <View style={styles.container}>
            <Text style={[styles.songTitleText]}>Display Recording Errors</Text>
            <ImageBackground 
              source={correct} 
              style={styles.correctContainer}/>
            <ImageBackground 
              source={wrong} 
              style={styles.wrongDownContainer}/>
            
            <ImageBackground 
                source={showCorrectLeft ? correct : wrong} 
                style={showCorrectLeft ? styles.correctContainer : styles.wrongContainer}>
            </ImageBackground>

            <ImageBackground 
                source={showCorrectRight ? correct : wrong} 
                style={showCorrectRight ? styles.correctContainer : styles.wrongContainer}>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    maxHeight: 40,
    marginTop: 50
  },
  songTitleText: {
    color: '#1f3872',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,  
  },
  correctContainer:{
    width: 35, 
    height: 35,
    marginRight:300,
    marginTop:10
  },
  wrongContainer:{
    width: 25, 
    height: 25,
    marginRight:300,
    marginTop:10
  },
  wrongDownContainer:{
    width: 25, 
    height: 25,
    marginRight:250,
    marginTop:10
  },
});

export default DisplayRecordingsOne