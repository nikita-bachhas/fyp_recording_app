import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';

const myData = [
    {id: 1, studentName: 'Nikita', teacherName: 'Prof'},
    {id: 2, studentName: 'Nikita7856', teacherName: 'Prof1'},
    {id: 3, studentName: 'Nikita782565', teacherName: 'Prof2'},
    {id: 4, studentName: 'Nickelodeon7856', teacherName: 'Prof3'},
]

const renderData = (item) => {
    return (
        <View style={styles.container}> 
            <Text>{item.studentName} </Text>
            <Text>{item.teacherName} </Text>
        </View>
    )
}

function DjangoTutorial() {
  return (
    <FlatList
    data = {myData}
    renderItem = {({item}) => {
        return renderData(item)
        }}
        keyExtractor = {item => item.id}
    />
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f7ff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default DjangoTutorial