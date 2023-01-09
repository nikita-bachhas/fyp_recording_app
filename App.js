import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TeacherRecording from './pages/TeacherRecording';
import StudentRecording from './pages/StudentRecording';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TeacherRecording}
          options={{title: 'Beats Mobile Application'}}
        />
        <Stack.Screen name="Student" component={StudentRecording} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack