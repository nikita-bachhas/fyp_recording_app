import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';
import CircularProgress from 'react-native-circular-progress-indicator';

const ComparisonAlgorithmTwo = (props) => {
  
  //Get data dynamically
  const SongToPlay = props.SongToPlay
  // const StudentLeftArray = props.StudentLeftArray
  // const StudentRightArray = props.StudentRightArray
  const StudentLeftArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  const StudentRightArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  function getData(){
    var finalPercentageValue = 0

    for (let t = 0; t < PrerecordedRecordings.length; t++) {
      const name = PrerecordedRecordings[t].SongTitle

      if (name == SongToPlay){
        const LeftPattern = PrerecordedRecordings[t].LeftPattern
        const RightPattern = PrerecordedRecordings[t].RightPattern
        const LeftPatternPositions = PrerecordedRecordings[t].LeftPatternPositions
        const RightPatternPositions = PrerecordedRecordings[t].RightPatternPositions
        const NoofLeftPatterns = PrerecordedRecordings[t].NoofLeftPatterns
        const NoofRightPatterns = PrerecordedRecordings[t].NoofRightPatterns

        function getDelta(){
          var DeltaArray = [];
      
          let x = LeftPatternPositions.length;
          let y = RightPatternPositions.length;
      
          var count = 0
      
          if (x<y){
            count = x
          }
          else{
            count = y
          }
      
          for (let i = 0; i < count; i++){
            let Delta = LeftPatternPositions[i] - RightPatternPositions[i]
            DeltaArray.push(Delta)
          } 
      
          return(DeltaArray)
        }

        function toString(array){
          var newString = ""
          for (let j = 0; j < array.length; j++){
            newString += array[j]
          } 
          return(newString)
        }

        function search(txt, pat){
          let m = pat.length;
          let n = txt.length;
          
          let count = 0;
          var patternSearch = ""
      
          for (let k = 0; k < n; k++){
            patternSearch = txt.slice(k, k+m);
            if (patternSearch == pat){
              count += 1
            }
          }
          return(count)
        }

        function getPos(txt, pat){
          let m = pat.length;
          let n = txt.length;
      
          var PatternPos = []
          var patternSearch = ""
      
          for (let k = 0; k < n; k++){
            patternSearch = txt.slice(k, k+m);
            if (patternSearch == pat){
              PatternPos.push(k)
            }
          }
          return(PatternPos)
        }

        function comparePos(DeltaArray, LeftPos, RightPos){
          let c = DeltaArray.length;
          var StudentDeltaArray = [];
          var count = 0
          var posCount = 0
      
          for (let a = 0; a < c; a++){
            let StudentDelta = LeftPos[a] - RightPos[a]
            StudentDeltaArray.push(StudentDelta)
          }
      
          console.log(StudentDeltaArray)
          let d = StudentDeltaArray.length;
      
          if (c<d){
            count = c
          }
          else{
            count = d
          }
      
          for (let b = 0; b < count; b++){
            if (DeltaArray[b] == StudentDeltaArray[b]){
              posCount += 1
            }
          }
      
          var PercentofPosSimilarity = (posCount/c)*100
      
          return(PercentofPosSimilarity)
        }

        const finalPercentageCalculation = () => {

          const StudentLeftString = toString(StudentLeftArray)
          const StudentRightString = toString(StudentRightArray)
      
          const LeftPatternString = toString(LeftPattern)
          const RightPatternString = toString(RightPattern)
      
          const LeftValue = search(StudentLeftString, LeftPatternString)
          const RightValue = search(StudentRightString, RightPatternString)
      
          const posSimilarity = comparePos(getDelta(), getPos(StudentLeftString, LeftPatternString), getPos(StudentRightString, RightPatternString))
      
          const LeftPercentage = (LeftValue/NoofLeftPatterns)*100
          const RightPercentage = (RightValue/NoofRightPatterns)*100
      
          const finalPercentage = Math.round((LeftPercentage * (1/3)) +  (RightPercentage * (1/3)) + (posSimilarity * (1/3)))
      
          console.log("Final Calculation: ", finalPercentage, LeftPercentage, RightPercentage)
      
          return(finalPercentage)
        }

        finalPercentageValue = finalPercentageCalculation();
      }
    }

    return(finalPercentageValue)
  }

  const value = getData();
  
  return(
    <View style={styles.container}>
      <Text style={[styles.songTitleText]}>Scoring System Two</Text>

      <CircularProgress
      value={value}
      radius={80}
      activeStrokeColor={'#2465FD'}
      activeStrokeSecondaryColor={'#C25AFF'}
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
    fontSize: 18, 
    paddingBottom: 7  
  },
});
export default ComparisonAlgorithmTwo