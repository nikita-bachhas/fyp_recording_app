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

    // const [data, setData] = React.useState([{BeatName: "Fleetwood Mac Tusk"}])
    const [data, setData] = React.useState([]);

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

    // function Create(){
    //     const [BeatID, setBeatID] = React.useState(null);
    //     const [UserID, setUserID] = React.useState(null);
    //     const [DateofAttempt, setDateofAttempt] = React.useState(null);
    //     const [TimeofAttempt, setTimeofAttempt] = React.useState(null);
    //     const [ImitationDuration, setImitationDuration] = React.useState(null);
    //     const [ImitationLeftArray, setImitationLeftArray] = React.useState([]);
    //     const [ImitationRightArray, setImitationRightArray] = React.useState([]);
    //     const [ImitationTempo, setImitationTempo] = React.useState(null);
    //     const [TempoSimiliarity, setTempoSimiliarity] = React.useState(null);
    //     const [BeatsSimilarity, setBeatsSimilarity] = React.useState(null);
    //     const [ImitationScore, setImitationScore] = React.useState(null);

    //     const InsertData = () => {
    //         fetch('http://192.168.10.142:8000/PrerecordedRecordingsImitations/', {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type':'application/json'
    //             },
                
    //             body: JSON.stringify({BeatID:BeatID, UserID:UserID, DateofAttempt:DateofAttempt,
    //                 TimeofAttempt:TimeofAttempt, ImitationDuration:ImitationDuration, 
    //                 ImitationLeftArray:ImitationLeftArray, ImitationRightArray:ImitationRightArray,
    //                  ImitationTempo:ImitationTempo, TempoSimiliarity:TempoSimiliarity,
    //                 BeatsSimilarity:BeatsSimilarity, ImitationScore:ImitationScore})
    //         })
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => console.error(error))
    //     }

    //     const pushData = () => {
    //         value = InsertData()
    //     }
    // }

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