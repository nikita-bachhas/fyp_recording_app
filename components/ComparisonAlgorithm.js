import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';
import CircularProgress from 'react-native-circular-progress-indicator';

const ComparisonAlgorithm = (props) => {

    //Get data dynamically
    const SongToPlay = props.SongToPlay
    const StudentLeftArray = props.StudentLeftArray
    const StudentRightArray = props.StudentRightArray
    // const StudentLeftArray = []
    // const StudentRightArray = []

    // async function Comparison(){
    const BeatComparison = () => {
      const beatMatchLeftCount = 0
      const beatMatchRightCount = 0

      for (let i = 0; i < PrerecordedRecordings.length; i++) {
        //From the JSON file
        const name = PrerecordedRecordings[i].SongTitle

        if (name == SongToPlay){

          const PrerecordedLeftArray = PrerecordedRecordings[i].LeftArray
          const PrerecordedRightArray = PrerecordedRecordings[i].RightArray
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
              else if (j == k - 1){
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
              else if (m == n - 1){
                beatMatchRightCount += 1
                break
              }
            }
          }

          console.log("The Total Number of Matching Beats for the Left Hand Side is:", beatMatchLeftCount, PrerecordedLeftArray.length, StudentLeftArray.length); 
          console.log("The Total Number of Matching Beats for the Right Hand Side is:", beatMatchRightCount, PrerecordedRightArray.length, StudentRightArray.length); 
          
          return(beatMatchLeftCount, beatMatchRightCount)

        }
        else{
          console.log("Not current Track; proceed to next track"); 
        }
      }
    }

    return(
        <View style={styles.container}>
            {/* <Text style={[styles.songTitleText]}>{<BeatComparison/>}</Text> */}
            <CircularProgress
              value={50}
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