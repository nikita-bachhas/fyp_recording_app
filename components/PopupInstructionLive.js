import React from "react";
import { Text, View, StyleSheet, Modal, Button} from 'react-native';

export default function PopupInstructionLive() {

    const [modalVisible, setModalVisible] = React.useState(true);

    return(
        <View style={styles.container}>

            <Modal
                transparent = {true} visible={modalVisible}>
                <View style = {{backgroundColor: "#000000aa", flex: 1}}>
                    <View style = {{backgroundColor: "#fff", flex: 1, paddingTop: 30, marginTop: 260, marginBottom: 220, marginRight:50, marginLeft: 50, padding: 40, borderRadius: 10, flex: 1}}> 
                        
                        <Text style={[styles.songTitleText]}>INSTRUCTIONS</Text>
                        <Text style={[styles.instructionsText]}>Press “Start Recording” to get one user to record the live original beat and “Stop Recording” to stop recording.</Text>
                        <Text style={[styles.instructionsText]}>Repeat the same step to record the imitate beat by pressing “Recreate” for the second user.</Text>
                        <Text style={[styles.instructionsText]}>Once done, press “Compare” to get your imitation score.</Text>
              
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