import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './screens/scheduleScreen.js';
import CourseDetailScreen from './screens/courseDetailScreen.js';
import CourseEditScreen from './screens/courseEditScreen.js';
import UserContext from './UserContext';
import {firebase} from './firebase'

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({ role: 'admin'});

  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ScheduleScreen"
            component={ScheduleScreen}
            options={{ title: 'Schedule'}}
          />
          <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}}
          />
          <Stack.Screen name="CourseDetailScreen"
            component={CourseDetailScreen}
            options={{ title: 'Course detail'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
