import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';

const BeatComparison = (props) => {

  const SongToPlay = props.SongToPlay
  // const StudentLeftArray = props.StudentLeftArray
  // const StudentRightArray = props.StudentRightArray
  const StudentLeftArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  const StudentRightArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const Comparison = () => {
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

  const BeatSimilarityValue = Comparison();

  return(
    <View style={styles.container}>

        <Text style={[styles.songTitleText]}>Beat Comparison</Text>
        <Text style={[styles.songTitleText]}>{BeatSimilarityValue}</Text>

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

export default BeatComparison