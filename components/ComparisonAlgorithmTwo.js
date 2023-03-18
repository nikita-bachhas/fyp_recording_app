import React from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';
import CircularProgress from 'react-native-circular-progress-indicator';
// import DisplayRecordingsOne from "../components/DisplayRecordingsOne";

const ComparisonAlgorithmTwo = (props) => {
  
  //Get data dynamically
  const SongToPlay = props.SongToPlay
  // const StudentLeftArray = props.StudentLeftArray
  // const StudentRightArray = props.StudentRightArray
  const StudentLeftArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  const StudentRightArray = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
  function getData(){
    var finalPercentageValue = 0

    for (let t = 0; t < PrerecordedRecordings.length; t++) {
      const name = PrerecordedRecordings[t].SongTitle

      if (name == SongToPlay){
        const PrerecordedLeftArray = PrerecordedRecordings[t].LeftArray
        const PrerecordedRightArray = PrerecordedRecordings[t].RightArray
        const LeftPattern = PrerecordedRecordings[t].LeftPattern
        const RightPattern = PrerecordedRecordings[t].RightPattern

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

        function getDelta(LeftPos, RightPos){
          var DeltaArray = [];
      
          let x = LeftPos.length;
          let y = RightPos.length;
      
          var count = 0
      
          if (x<y){
            count = x
          }
          else{
            count = y
          }
      
          for (let i = 0; i < count; i++){
            let Delta = LeftPos[i] - RightPos[i]
            DeltaArray.push(Delta)
          } 

          return(DeltaArray)
        }

        function comparePos(DeltaOriginalArray, DeltaImitatedArray){
          let c = DeltaOriginalArray.length;
          let d = DeltaImitatedArray.length;

          var count = 0
          var posCount = 0
      
          if (c<d){ count = c }
          else{ count = d }
      
          for (let b = 0; b < count; b++){
            if (DeltaOriginalArray[b] == DeltaImitatedArray[b]){
              posCount += 1
            }
          }
      
          var PercentofPosSimilarity = (posCount/c)*100
      
          return(PercentofPosSimilarity)
        }

        const finalPercentageCalculation = () => {

          const OringalLeftString = toString(PrerecordedLeftArray)
          const OriginalRightString = toString(PrerecordedRightArray)

          const StudentLeftString = toString(StudentLeftArray)
          const StudentRightString = toString(StudentRightArray)
      
          const LeftPatternString = toString(LeftPattern)
          const RightPatternString = toString(RightPattern)

          const LeftOringalValue = search(OringalLeftString, LeftPatternString)
          const RightOringalValue = search(OriginalRightString, RightPatternString)
      
          const LeftImitatedValue = search(StudentLeftString, LeftPatternString)
          const RightImitatedValue = search(StudentRightString, RightPatternString)

          const DeltaOriginalArray = getDelta(LeftOringalValue, RightOringalValue)
          const DeltaImitatedArray = getDelta(LeftImitatedValue, RightImitatedValue)
      
          const posSimilarity = comparePos(DeltaOriginalArray, DeltaImitatedArray)
      
          const LeftPercentage = (LeftImitatedValue.length/LeftOringalValue.length)*100
          const RightPercentage = (RightImitatedValue.length/RightOringalValue.length)*100
      
          const finalPercentage = Math.round((LeftPercentage * (1/3)) +  (RightPercentage * (1/3)) + (posSimilarity * (1/3)))
      
          console.log("Final Calculation: ", finalPercentage, LeftPercentage, RightPercentage, posSimilarity)
      
          // return(finalPercentage)
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

        <View  style={styles.progressContainer}>
          <CircularProgress
            value={value}
            radius={80}
            activeStrokeColor={'#2465FD'}
            activeStrokeSecondaryColor={'#C25AFF'}
          />
        </View>

        <ScrollView contentContainerStyle={styles.contentContainer}> 
          {/* <DisplayRecordingsOne MyData = {MyData} StudentLeftArray = {StudentLeftArray} StudentRightArray = {StudentRightArray} PrerecordedLeftArray = {PrerecordedLeftArray} PrerecordedRightArray = {PrerecordedRightArray} LeftWrongPos = {LeftWrongPos} RightWrongPos = {RightWrongPos}/> */}
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
  songTitleText: {
    color: '#1f3872',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18, 
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 95, 
    paddingBottom: 85
  },
});
export default ComparisonAlgorithmTwo