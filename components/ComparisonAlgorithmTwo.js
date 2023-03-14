import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import PrerecordedRecordings from '../data/PrerecordedRecordings.json';
import CircularProgress from 'react-native-circular-progress-indicator';

const ComparisonAlgorithmTwo = (props) => {
  
  const StudentLeftArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  const StudentRightArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const LeftPattern = [0, 0, 0, 0, 0, 0, 0, 0, 1]
  const RightPattern = [0, 0, 0, 0, 0, 0, 0, 1]
  const LeftPatternPositions = [6, 16, 27, 37, 47, 57, 67, 78, 88, 98, 108, 118, 128, 139, 149, 159, 168]
  const RightPatternPositions = [4, 12, 23, 33, 44, 53, 64, 73, 84, 94, 104, 114, 124, 134, 145, 155, 165, 175]
  const NumberofLeftPatterns = 17
  const NumberofRightPatters = 18

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
    const LeftPatternString = toString(LeftPattern)
    const StudentRightString = toString(StudentRightArray)
    const RightPatternString = toString(RightPattern)

    const LeftValue = search(StudentLeftString, LeftPatternString)
    const RightValue = search(StudentRightString, RightPatternString)

    const posSimilarity = comparePos(getDelta(), getPos(StudentLeftString, LeftPatternString), getPos(StudentRightString, RightPatternString))

    const LeftPercentage = (LeftValue/NumberofLeftPatterns)*100
    const RightPercentage = (RightValue/NumberofRightPatters)*100

    const finalPercentage = Math.round((LeftPercentage * (1/3)) +  (RightPercentage * (1/3)) + (posSimilarity * (1/3)))

    console.log("Final Calculation: ", finalPercentage, LeftPercentage, RightPercentage)

    return(finalPercentage)
  }

  const value = finalPercentageCalculation();
  
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
    fontSize: 20, 
    paddingBottom: 7  
  },
});
export default ComparisonAlgorithmTwo