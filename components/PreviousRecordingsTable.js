import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
export default class PreviousRecordingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tableHead: ['Recording', 'Teacher Uploaded/Recorded By', 'Attempted', 'Live/Pre-recorded', 'Immitation Score'],
        widthArr: [80, 200, 80, 120, 120]
    }
  }
  render() {
    const state = this.state;
    const data = [
                  ['1', 'Prof', '6/2/2023', 'Live', '97%'],
                  ['2', 'Prof1', '6/2/2023', 'Pre-recorded', '92%'],
                  ['3', 'Prof2', '6/2/2023', 'Live', '88%'],
                  ['4', 'Prof3', '6/2/2023', 'Pre-recorded', '72%'],
                  ['5', 'Prof4', '6/2/2023', 'Live', '46%']
                ]
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.head} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  data.map((dataRow, index) => (
                    <Row
                      key={index}
                      data={dataRow}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    marginRight: 22,
    marginLeft: 12,
    marginTop: 22,
    marginBottom: 500,
    paddingTop: 22,
    paddingBottom: 18,
    width: 310,
  },
  head: { 
    height: 50, 
    backgroundColor: '#6F7BD9' 
  },
  text: { 
    textAlign: 'center', 
    fontWeight: '200' 
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    height: 40, 
    backgroundColor: '#F7F8FA' 
  }
});