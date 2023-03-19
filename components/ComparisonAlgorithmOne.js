import React from "react";
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';
import CircularProgress from 'react-native-circular-progress-indicator';
import DisplayRecordingsOne from "./DisplayRecordingsOne";
import DisplayRecordingsTwo from "./DisplayRecordingsTwo";

const ComparisonAlgorithmOne = (props) => {
  
  var MyData = []
  var LeftWrongPos = []
  var RightWrongPos = []
  var PrerecordedLeftArray = []
  var PrerecordedRightArray = []

  //Get data dynamically
  const SongToPlay = props.SongToPlay
  // const StudentLeftArray = props.StudentLeftArray
  // const StudentRightArray = props.StudentRightArray
  // const Duration = props.Duration
  
  //Comment out fake data later
  const StudentLeftArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  const StudentRightArray = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const Duration =  21

  const BeatComparison = () => {
    var beatMatchLeftCount = 0
    var beatMatchRightCount = 0
    
    for (let i = 0; i < PrerecordedRecordings.length; i++) {
      const name = PrerecordedRecordings[i].SongTitle
      
      if (name == SongToPlay){
        
        PrerecordedLeftArray = PrerecordedRecordings[i].LeftArray
        PrerecordedRightArray = PrerecordedRecordings[i].RightArray
  
        for (let j = 0; j < PrerecordedLeftArray.length; j++){
          if (PrerecordedLeftArray[j] == StudentLeftArray[j]){
            beatMatchLeftCount += 1
          }
          else if ((PrerecordedLeftArray[j] == 1)){
            if (PrerecordedLeftArray[j] == StudentLeftArray[j-1]){
              beatMatchLeftCount += 1
            }
            else if (PrerecordedLeftArray[j] == StudentLeftArray[j+1]){
              beatMatchLeftCount += 1
            }
            else if (PrerecordedLeftArray[j] == StudentLeftArray[j-2]){
              beatMatchLeftCount += 1
            }
            else if (PrerecordedLeftArray[j] == StudentLeftArray[j+2]){
              beatMatchLeftCount += 1
            }
          }
          else{
            LeftWrongPos.push(j)
          }
        } 
  
        for (let k = 0; k< PrerecordedRightArray.length; k++){
          if (PrerecordedRightArray[k] == StudentRightArray[k]){
            beatMatchRightCount += 1
          }
          else if ((PrerecordedRightArray[k] == 1)){
            if (PrerecordedRightArray[k] == StudentRightArray[k-1]){
              beatMatchRightCount += 1
            }
            else if (PrerecordedRightArray[k] == StudentRightArray[k+1]){
              beatMatchRightCount += 1
            }
            else if (PrerecordedRightArray[k] == StudentRightArray[k-2]){
              beatMatchRightCount += 1
            }
            else if (PrerecordedRightArray[k] == StudentRightArray[k+2]){
              beatMatchRightCount += 1
            }
          }
          else{
            RightWrongPos.push(k)
          }
        }
  
        var averageTotalBeatLeftCount = (PrerecordedLeftArray.length + StudentLeftArray.length)/2
        var averageTotalBeatRightCount = (PrerecordedRightArray.length + StudentRightArray.length)/2
  
        var beatMatchLeftPercent = beatMatchLeftCount/averageTotalBeatLeftCount
        var beatMatchRightPercent = beatMatchRightCount/averageTotalBeatRightCount

        MyData.push(beatMatchLeftCount, beatMatchRightCount, averageTotalBeatLeftCount, averageTotalBeatRightCount, beatMatchLeftPercent, beatMatchRightPercent)
  
        var BeatSimilarity = Math.round((50 * beatMatchLeftPercent) + (50 * beatMatchRightPercent))
  
        console.log("Variables:", name, BeatSimilarity, beatMatchLeftPercent, beatMatchLeftCount, beatMatchRightPercent, beatMatchRightCount, LeftWrongPos, RightWrongPos)
        console.log(MyData)
      }
    }
    return(BeatSimilarity)
  }

  const TempoComparison = () => {
    var averageTotalBeatCount = (StudentLeftArray.length + StudentRightArray.length)/2
  
    var averageTotalBeatCountPerSecond = (averageTotalBeatCount * 100)/1000
  
    var weightage = 60/Duration
  
    var StudentTempo = averageTotalBeatCountPerSecond * weightage
  
    console.log("Variables:", averageTotalBeatCount, Duration, StudentTempo)
  
    for (let i = 0; i < PrerecordedRecordings.length; i++) {
      const name = PrerecordedRecordings[i].SongTitle
      
      if (name == SongToPlay){
        const PrerecordedTempo = PrerecordedRecordings[i].Tempo
  
        var BeatDifferencePercentTempoPercent = ((Math.abs(PrerecordedTempo-StudentTempo))/PrerecordedTempo) * 100
        var BeatSimilarityPercent = 100 -BeatDifferencePercentTempoPercent

        MyData.push(BeatDifferencePercentTempoPercent)
  
        console.log("Tempo Variables:", name, PrerecordedTempo, BeatSimilarityPercent)
        console.log(MyData)
      }
    }
    return(BeatSimilarityPercent)
  }

  const finalPercentageCalculation = () => {
    
    const finalBeatMatchCount = BeatComparison();
    
    const finalTempo =  TempoComparison();

    const finalPercentage = Math.round((finalTempo * 0.20) +  (finalBeatMatchCount * 0.80))

    console.log("Final Calculation: ", finalBeatMatchCount, finalTempo, finalPercentage)

    return(finalPercentage)
  }

  const value = finalPercentageCalculation();

  return(
    <View style={styles.container}>

      <Text style={[styles.songTitleText]}>Scoring System One</Text>

      <View  style={styles.progressContainer}>

      <CircularProgress
        value={value}
        radius={80}
        inActiveStrokeOpacity={0.5}
        activeStrokeWidth={15}
        inActiveStrokeWidth={20}
        progressValueStyle={{ fontWeight: '100', color: '#1f3872' }}
        activeStrokeSecondaryColor="yellow"
        inActiveStrokeColor="black"
        duration={3000}
        dashedStrokeConfig={{
          count: 50,
          width: 4,
          }}
      /> 
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}> 
        {/* <DisplayRecordingsOne MyData = {MyData} StudentLeftArray = {StudentLeftArray} StudentRightArray = {StudentRightArray} PrerecordedLeftArray = {PrerecordedLeftArray} PrerecordedRightArray = {PrerecordedRightArray} LeftWrongPos = {LeftWrongPos} RightWrongPos = {RightWrongPos}/> */}
        <DisplayRecordingsTwo SongToPlay = {props.SongToPlay} Duration = {Duration} LeftWrongPos = {LeftWrongPos} RightWrongPos = {RightWrongPos}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 95, 
    paddingBottom: 85
  },
  songTitleText: {
    color: '#1f3872',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18, 
  },
  contentContainer: {
    width: 320,
    paddingTop: 10
  }
});

export default ComparisonAlgorithmOne