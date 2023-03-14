import React from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import {Card} from 'react-native-paper'

// const myData = [
//     {BeatID: 1, BeatName: "Fleetwood Mac Tusk", Duration: "0:14"},
//     {BeatID: 2, BeatName: "Michael Jackson Billy Jean", Duration: "0:21"},
//     {BeatID: 3, BeatName: "Queen Another One Bites the Dust", Duration: "0:17"},
//     {BeatID: 4, BeatName: "Phil Collins You Can't Hurry Love", Duration: "0:18"}
// ]

function DjangoTutorial() {

    const [data, setData] = React.useState([{BeatName: "Fleetwood Mac Tusk"}])

    React.useEffect(() => {
        fetch('http://192.168.10.142:8000/PrerecordedRecordings/', {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(data => {
            setData(data)
        })
        .catch(error => console.error(error))
    }, [])

    const renderData = (item) => {
        return (
            <Card style = {styles.cardStyle}>
                <Text>{item.BeatName} </Text>
                <Text>{item.Duration} </Text>
            </Card>
        )
    }

    return (
        <View style={styles.container}>
        <FlatList
        data = {data}
        renderItem = {({item}) => {
            return renderData(item)
            }}
            keyExtractor = {item => item.BeatID}
        />
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f7ff',
    },
      cardStyle: {
        padding: 10,
        margin: 10
      }
})

export default DjangoTutorial