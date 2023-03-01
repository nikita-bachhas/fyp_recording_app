import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';
import CircularProgress from 'react-native-circular-progress-indicator';

const ComparisonAlgorithm = (props) => {

    //Get data dynamically
    const SongToPlay = props.SongToPlay
    const StudentLeftArray = props.StudentLeftArray
    const StudentRightArray = props.StudentRightArray
    // const StudentLeftArray = [0,1,0,1,0,1]
    // const StudentRightArray = [0,1,0,1,0,1]

    const BeatComparison = () => {
      const beatMatchLeftCount = 0
      const beatMatchRightCount = 0

      for (let i = 0; i < PrerecordedRecordings.length; i++) {
        //From the JSON file
        const name = PrerecordedRecordings[i].SongTitle

        if (name == SongToPlay){

          const PrerecordedLeftArray = PrerecordedRecordings[i].LeftArray
          const PrerecordedRightArray = PrerecordedRecordings[i].RightArray

          // const PrerecordedLeftArray = [0,1,0,1,0,1]
          // const PrerecordedRightArray = [0,1,0,1,0,1]

          console.log(SongToPlay, name, StudentLeftArray, PrerecordedLeftArray, StudentRightArray, PrerecordedRightArray); 
          
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

          console.log("The Total Number of Matching Beats for the Left Hand Side is:", beatMatchLeftCount, PrerecordedLeftArray.length, StudentLeftArray.length); 
          console.log("The Total Number of Matching Beats for the Right Hand Side is:", beatMatchRightCount, PrerecordedRightArray.length, StudentRightArray.length); 
          
          const finalBeatMatchCount = (beatMatchLeftCount + beatMatchRightCount)/2

          console.log("Beat Comparison: ", finalBeatMatchCount)

          return(finalBeatMatchCount)
        }
        else{
          console.log("Not current Track; proceed to next track"); 
        }
      }
    }

    const tempoComparison = () => {
      for (let i = 0; i < PrerecordedRecordings.length; i++) {

        const name = PrerecordedRecordings[i].SongTitle

        if (name == SongToPlay){
          //Counting Temp
          const PrerecordedTotalLeftCount = 0
          const PrerecordedTappedLeftCount = 0
          for (let a = 0; a < PrerecordedLeftArray.length; a++){
            PrerecordedTotalLeftCount += 1
            if (a == 1){
              PrerecordedTappedLeftCount += 1
            }
          }
          const tempoPrerecordedLeft = PrerecordedTappedLeftCount/PrerecordedTotalLeftCount * 100

          const PrerecordedTotalRightCount = 0
          const PrerecordedTappedRightCount = 0
          for (let b = 0; b < PrerecordedRightArray.length; b++){
            PrerecordedTotalRightCount += 1
            if (b == 1){
              PrerecordedTappedRightCount += 1
            }
          }
          const tempoPrerecordedRight = PrerecordedTappedRightCount/PrerecordedTotalRightCount * 100

          const StudentTotalLeftCount = 0
          const StudentTappedLeftCount = 0
          for (let c = 0; c < StudentLeftArray.length; c++){
            StudentTotalLeftCount += 1
            if (c == 1){
              StudentTappedLeftCount += 1
            }
          }
          const tempoStudentLeft = StudentTappedLeftCount/StudentTotalLeftCount * 100

          const StudentTotalRightCount = 0
          const StudentTappedRightCount = 0
          for (let d = 0; d < StudentRightArray.length; d++){
            StudentTotalRightCount += 1
            if (d == 1){
              StudentTappedRightCount += 1
            }
          }
          const tempoStudentRight = StudentTappedRightCount/StudentTotalRightCount * 100

          const finalTempo = (tempoPrerecordedLeft + tempoPrerecordedRight + tempoStudentLeft + tempoStudentRight)/4

          console.log("Calculating tempo: ", tempoPrerecordedLeft, tempoPrerecordedRight, tempoStudentLeft, tempoStudentRight, finalTempo)

          return(finalTempo)
        }
        else{
          console.log("Not current Track; proceed to next track"); 
        }
      }
    }

    const finalPercentageCalculation = () => {

      const finalBeatMatchCount = BeatComparison();
      const finalTempo = tempoComparison();

      const finalPercentage = (finalTempo * 0.20) +  (finalBeatMatchCount * 0.80)

      console.log("Final Calculation: ", finalBeatMatchCount, finalTempo, finalPercentage)

      return(finalPercentage)
    }

    const value = finalPercentageCalculation();

    return(
        <View style={styles.container}>

            {/* <Text style={[styles.songTitleText]}>{<BeatComparison/>}</Text> */}
            {/* <Text style={[styles.songTitleText]}>{<tempoComparison/>}</Text> */}
            {/* <Text style={[styles.songTitleText]}>{<finalPercentageCalculation/>}</Text> */}

            <CircularProgress
              value={value}
              radius={120}
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
  },
});

export default ComparisonAlgorithm