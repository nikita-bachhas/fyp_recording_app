import React from "react";
import { Text, View, StyleSheet, Modal, Button} from 'react-native';

export default function PopupInstruction() {

    const [modalVisible, setModalVisible] = React.useState(true);

    return(
        <View style={styles.container}>

            <Modal
                transparent = {true} visible={modalVisible}>
                <View style = {{backgroundColor: "#000000aa", flex: 1}}>
                    <View style = {{backgroundColor: "#fff", flex: 1, paddingTop: 30, marginTop: 250, marginBottom: 210, marginRight:50, marginLeft: 50, padding: 40, borderRadius: 10, flex: 1}}> 
                        
                        <Text style={[styles.songTitleText]}>INSTRUCTIONS</Text>
                        <Text style={[styles.instructionsText]}>Press "Play Sound" to listen to the beat.</Text>
                        <Text style={[styles.instructionsText]}>To imitate the beat, press "Recreate" and start tapping once the countdown timer reaches to 0.</Text>
                        <Text style={[styles.instructionsText]}>Tap on the "Left" circular button with your left hand and on the "Right" circular button with your right hand.</Text>
                        <Text style={[styles.instructionsText]}>Once done, press "Stop".</Text>
              
                        <Button title="Close" onPress={() => setModalVisible(false)}/>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f7ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    instructionsText: {
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 17, 
    },
    songTitleText: {
        color: '#1f3872',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10
      },
  });