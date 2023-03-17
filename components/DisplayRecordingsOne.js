import React from "react";
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Emoji from "react-native-emoji";
import correct from '../assets/correct.png'
import wrong from '../assets/wrong.png'

const DisplayRecordingsOne = (props) => {

  const beatMatchLeftCount = props.MyData[0]
  const beatMatchRightCount = props.MyData[1]
  const averageTotalBeatLeftCount = Math.round(props.MyData[2])
  const averageTotalBeatRightCount = Math.round(props.MyData[3])
  const beatMatchLeftPercent = Math.round(props.MyData[4]*100)
  const beatMatchRightPercent = Math.round(props.MyData[5]*100)
  const TempoPercent =  props.MyData[6]

  const LeftWrongPos = props.LeftWrongPos
  const PrerecordedLeftArray = props.PrerecordedLeftArray
  const StudentLeftArray = props.StudentLeftArray

  const RightWrongPos = props.RightWrongPos
  const PrerecordedRightArray = props.PrerecordedRightArray
  const StudentRightArray = props.StudentRightArray

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

  const getLeftPrerecordedBeats = (index) => {
    var LeftPrerecordedPos = []
    LeftPrerecordedPos.push(PrerecordedLeftArray[index], PrerecordedLeftArray[index+1], PrerecordedLeftArray[index+2], PrerecordedLeftArray[index+3])
    return(LeftPrerecordedPos)
  }

  const getLeftImitatedBeats = (index) => {
    var LeftImitatedPos = []
    LeftImitatedPos.push(StudentLeftArray[index], StudentLeftArray[index+1], StudentLeftArray[index+2], StudentLeftArray[index+3])
    return(LeftImitatedPos)
  }

  const getRightPrerecordedBeats = (index) => {
    var RightPrerecordedPos = []
    RightPrerecordedPos.push(PrerecordedRightArray[index], PrerecordedRightArray[index+1], PrerecordedRightArray[index+2], PrerecordedRightArray[index+3])
    return(RightPrerecordedPos)
  }

  const getRightImitatedBeats = (index) => {
    var RightImitatedPos = []
    RightImitatedPos.push(StudentRightArray[index], StudentRightArray[index+1], StudentRightArray[index+2], StudentRightArray[index+3])
    return(RightImitatedPos)
  }

  const getDuration = (index) => {     
    var duration = Math.round((index*100)/1000)
    if (duration < 10){
      var durationStr = "0:0" + duration.toString();
    }
    else{
      var durationStr = "0:" + duration.toString();
    }
    return(durationStr)
  }

  const compareOriginalAndImitated = (originalArray, imitatedArray) => {     
    var orginalIndexPos = 0
    var imitatedIndexPos = 0
    for (let i = 0; i< originalArray.length; i++){
      if (originalArray[i] == 1){
        orginalIndexPos = i+1
        break
      }
    }

    for (let j= 0; j< imitatedArray.length; j++){
      if (imitatedArray[j] == 1){
        imitatedIndexPos = j+1
        break
      }
    }

    var beatDiff = Math.abs((orginalIndexPos - imitatedIndexPos))

    if (orginalIndexPos == 0){
      return("Not supposed to play any beats here")
    }
    else if(imitatedIndexPos == 0){
      return("Missed imitation of a beat")
    }
    else if (orginalIndexPos>imitatedIndexPos){
      return("Played " + beatDiff + " beats faster")
    }
    else if (imitatedIndexPos>orginalIndexPos){
      return("Played " + beatDiff  + " beats slower" )
    }
  }

  function getLeftErrorLines(){
    return LeftWrongPos.map((leftErrorLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <View style={{flexDirection: 'row'}}>
            <ImageBackground 
              source={wrong} 
              style={styles.wrongDownListContainer}>
            </ImageBackground>

            <Text style={styles.explanationWrongDownText}>Incorrect beats played at</Text>
            <Text style={styles.durationText}>{getDuration(leftErrorLine)}</Text>
          </View>
          
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.explanationWrongDownBarText}>Original Beat: </Text>
            <Text style={styles.explanationWrongDownBoldBarText}>{getLeftPrerecordedBeats(leftErrorLine)}</Text>
            <Text style={styles.explanationWrongDownImitationBarText}>Imitated Beat: </Text>
            <Text style={styles.explanationWrongDownBoldBarText}>{getLeftImitatedBeats(leftErrorLine)}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{ fontSize: 8, marginTop: 4, marginLeft: 30}}>{`\u25CF`}</Text>
            <Text style={{paddingBottom: 14, marginLeft: 10}}>{compareOriginalAndImitated(getLeftPrerecordedBeats(leftErrorLine), getLeftImitatedBeats(leftErrorLine))}</Text>
          </View>

       </View>
       );
      });
    }

  function getRightErrorLines(){
    return RightWrongPos.map((rightErrorLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <View style={{flexDirection: 'row'}}>
            <ImageBackground 
              source={wrong} 
              style={styles.wrongDownListContainer}>
            </ImageBackground>

            <Text style={styles.explanationWrongDownText}>Incorrect beats played at</Text>
            <Text style={styles.durationText}>{getDuration(rightErrorLine)}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.explanationWrongDownBarText}>Original Beat: </Text>
            <Text style={styles.explanationWrongDownBoldBarText}>{getRightPrerecordedBeats(rightErrorLine)}</Text>
            <Text style={styles.explanationWrongDownImitationBarText}>Imitated Beat: </Text>
            <Text style={styles.explanationWrongDownBoldBarText}>{getRightImitatedBeats(rightErrorLine)}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{ fontSize: 8, marginTop: 4, marginLeft: 30}}>{`\u25CF`}</Text>
            <Text style={{paddingBottom: 14, marginLeft: 10}}>{compareOriginalAndImitated(getRightPrerecordedBeats(rightErrorLine), getRightImitatedBeats(rightErrorLine))}</Text>
          </View>

        </View>
        );
      });
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

            {beatMatchLeftCount!=averageTotalBeatLeftCount ? getLeftErrorLines() : null}

            <View style={{flexDirection: 'row'}}> 
              <ImageBackground 
                source={showCorrectRight ? correct : wrong} 
                style={showCorrectRight ? styles.correctContainer : styles.wrongContainer}>
              </ImageBackground>
              {beatMatchRightPercent>70 ? <Text style={styles.explanationText}>Successfully Completed {beatMatchRightCount} out of {averageTotalBeatRightCount} beats for right hand</Text>: <Text style={styles.explanationWrongText}>Only Managed to Complete {beatMatchRightCount} out of {averageTotalBeatRightCount} beats for right hand</Text>}
            </View>

            {beatMatchLeftCount!=averageTotalBeatLeftCount ? getRightErrorLines() : null}

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
    marginRight: 4,
    marginTop: 4
  },
  explanationWrongDownBarText: {
    marginLeft: 30,
    marginTop: 4,
    marginBottom: 12
  },
  explanationWrongDownBoldBarText: {
    marginTop: 4,
    marginBottom: 12, 
    fontWeight: "bold"
  },
  explanationWrongDownImitationBarText: {
    marginLeft: 15,
    marginTop: 4,
    marginBottom: 12
  },
  wrongDownListText: {
    marginLeft: 10,
    marginRight: 155,
    marginTop: 4
  },
  wrongDownContainer:{
    width: 26, 
    height: 26,
    marginLeft: 30,
    marginBottom: 8
  },
  wrongDownListContainer:{
    width: 26, 
    height: 26,
    marginLeft: 30,
    marginBottom: 8
  },
  durationText: {
    fontWeight: "bold", 
    paddingTop: 4,
    marginRight: 36
  }
});

export default DisplayRecordingsOne