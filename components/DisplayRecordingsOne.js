import React from "react";
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import correct from '../assets/correct.png'
import wrong from '../assets/wrong.png'

const DisplayRecordingsOne = (props) => {

  // const beatMatchLeftCount = props.MyData[0]
  const beatMatchLeftCount = 160
  const beatMatchRightCount = props.MyData[1]
  const averageTotalBeatLeftCount = Math.round(props.MyData[2])
  const averageTotalBeatRightCount = Math.round(props.MyData[3])
  const beatMatchLeftPercent = Math.round(props.MyData[4]*100)
  const beatMatchRightPercent = Math.round(props.MyData[5]*100)
  const TempoPercent =  props.MyData[6]

  const [showCorrectLeft, setShowCorrectLeft] = React.useState(false);
  const [showCorrectRight, setShowCorrectRight] = React.useState(false);
  const [showTempo, setShowTempo] = React.useState(false);

  const CheckNumberofBeatsLeft = () => {
    if (beatMatchLeftPercent > 69){
      console.log("Beat Check Left Correct")
      React.useEffect(()=>{
        setShowCorrectLeft(true);
      }, [])
    }
    else{
      console.log("Beat Check Left Wrong")
    }
  }

  const CheckNumberofBeatsRight= () => {
    if (beatMatchRightPercent > 69){
      console.log("Beat Check Right Correct")
      React.useEffect(()=>{
        setShowCorrectRight(true);
      }, [])
    }
    else{
      console.log("Beat Check Right Wrong")
    }
  }

  const CheckTempo = () => {
    if (TempoPercent < 31){
      console.log("Tempo Correct", TempoPercent)
      React.useEffect(()=>{
        setShowTempo(true);
      }, [])
    }
    else{
      console.log("Tempo Wrong", TempoPercent)
    }
  }

  CheckNumberofBeatsLeft();
  CheckNumberofBeatsRight();
  CheckTempo();

    return(
        <View style={styles.container}>

            <View style={{flexDirection: 'row'}}>
                <ImageBackground 
                  source={showCorrectLeft ? correct : wrong} 
                  style={showCorrectLeft ? styles.correctContainer : styles.wrongContainer}>
                </ImageBackground>
                {beatMatchLeftPercent>70 ? <Text style={styles.explanationText}>Successfully Completed {beatMatchLeftCount} out of {averageTotalBeatLeftCount} beats for left hand</Text>: <Text style={styles.explanationWrongText}>Only Managed to Complete {beatMatchLeftCount} out of {averageTotalBeatLeftCount} beats for left hand</Text>}
            </View>

            {beatMatchLeftCount!=averageTotalBeatLeftCount ?
              <View style={{flexDirection: 'row'}}>
                <ImageBackground 
                  source={wrong} 
                  style={styles.wrongDownContainer}>
                </ImageBackground>
                <Text style={styles.explanationWrongDownText}>Incorrect beats played at 0:15</Text>
            </View>: null}

            <View style={{flexDirection: 'row'}}> 
              <ImageBackground 
                source={showCorrectRight ? correct : wrong} 
                style={showCorrectRight ? styles.correctContainer : styles.wrongContainer}>
              </ImageBackground>
              {beatMatchRightPercent>70 ? <Text style={styles.explanationText}>Successfully Completed {beatMatchRightCount} out of {averageTotalBeatRightCount} beats for right hand</Text>: <Text style={styles.explanationWrongText}>Only Managed to Complete {beatMatchRightCount} out of {averageTotalBeatRightCount} beats for right hand</Text>}
            </View>

            <View style={{flexDirection: 'row'}}> 
              <ImageBackground 
                source={showTempo ? correct : wrong} 
                style={showTempo ? styles.correctContainer : styles.wrongContainer}>
              </ImageBackground>
              {TempoPercent < 31 ? <Text style={styles.explanationTextTempo}>Tempo is within 30% range</Text>: <Text style={styles.explanationWrongTextTempo}>Tempo is not within 30% range</Text> }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  songTitleText: {
    color: '#1f3872',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,  
  },
  explanationText: {
    marginLeft: 10,
    marginRight: 25,
    marginTop: 2
  },
  explanationTextTempo: {
    marginLeft: 8,
    marginRight: 108,
    marginTop: 10
  },
  correctContainer:{
    width: 35, 
    height: 35,
    marginLeft: 2,
    marginBottom: 10
  },
  explanationWrongText: {
    marginLeft: 16,
    marginRight: 25,
    marginBottom: 5
  },
  explanationWrongTextTempo: {
    marginLeft: 15,
    marginRight: 95,
    marginTop: 6
  },
  wrongContainer:{
    width: 26, 
    height: 26,
    marginLeft: 22,
  },
  explanationWrongDownText: {
    marginLeft: 10,
    marginRight: 35,
    marginTop: 4
  },
  wrongDownContainer:{
    width: 26, 
    height: 26,
    marginLeft: 30,
    // marginRight:250,
    marginBottom: 8
  },
});

export default DisplayRecordingsOne