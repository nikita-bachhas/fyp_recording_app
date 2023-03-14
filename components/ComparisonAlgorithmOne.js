import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';
import CircularProgress from 'react-native-circular-progress-indicator';

const ComparisonAlgorithmOne = (props) => {
  
  //Get data dynamically
  const SongToPlay = props.SongToPlay
  // const StudentLeftArray = props.StudentLeftArray
  // const StudentRightArray = props.StudentRightArray
  // const Duration = props.Duration
  const StudentLeftArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  const StudentRightArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const Duration = 14

  const BeatComparison = () => {
    var beatMatchLeftCount = 0
    var beatMatchRightCount = 0
    
    for (let i = 0; i < PrerecordedRecordings.length; i++) {
      const name = PrerecordedRecordings[i].SongTitle
      
      if (name == SongToPlay){
        
        const PrerecordedLeftArray = PrerecordedRecordings[i].LeftArray
        const PrerecordedRightArray = PrerecordedRecordings[i].RightArray
  
        for (let j = 0; j < PrerecordedLeftArray.length; j++){
          for (let k = 0; k < StudentLeftArray.length; k++){
            if (j == k){
              beatMatchLeftCount += 1
              break
            }
            else if (j == k + 1){
              beatMatchLeftCount += 1
              break
            } 
            else if (j == k + 2){
              beatMatchLeftCount += 1
              break
            } 
            else if (j == k + 3){
              beatMatchLeftCount += 1
              break
            } 
            else if (j == k - 1){
              beatMatchLeftCount += 1
              break
            }
            else if (j == k - 2){
              beatMatchLeftCount += 1
              break
            }
            else if (j == k - 3){
              beatMatchLeftCount += 1
              break
            }
          }
        }
  
        for (let m = 0; m < PrerecordedRightArray.length; m++){
          for (let n = 0; n < StudentRightArray.length; n++){
            if (m == n){
              beatMatchRightCount += 1
              break
            }
            else if (m == n + 1){
              beatMatchRightCount += 1
              break
            } 
            else if (m == n + 2){
              beatMatchRightCount += 1
              break
            }
            else if (m == n + 3){
              beatMatchRightCount += 1
              break
            }
            else if (m == n - 1){
              beatMatchRightCount += 1
              break
            }
            else if (m == n - 2){
              beatMatchRightCount += 1
              break
            }
            else if (m == n - 3){
              beatMatchRightCount += 1
              break
            }
          }
        }
  
        var averageTotalBeatLeftCount = (PrerecordedLeftArray.length + StudentLeftArray.length)/2
        var averageTotalBeatRightCount = (PrerecordedRightArray.length + StudentRightArray.length)/2
  
        var beatMatchLeftPercent = beatMatchLeftCount/averageTotalBeatLeftCount
        var beatMatchRightPercent = beatMatchRightCount/averageTotalBeatRightCount
  
        var BeatSimilarity = Math.round((50 * beatMatchLeftPercent) + (50 * beatMatchRightPercent))
  
        console.log("Variables:", name, BeatSimilarity, beatMatchLeftPercent, beatMatchLeftCount, beatMatchRightPercent, beatMatchRightCount)
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
  
        var BeatSimilarityPercent = Math.round((StudentTempo/PrerecordedTempo) * 100)
  
        console.log("Tempo Variables:", name, PrerecordedTempo, BeatSimilarityPercent)
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    maxHeight: 40,
    marginTop: 10
  },
  songTitleText: {
    color: '#1f3872',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20, 
    paddingBottom: 7 
  },
});

export default ComparisonAlgorithmOne