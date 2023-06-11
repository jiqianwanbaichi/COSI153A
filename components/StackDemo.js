import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CountChange from './CountChange';
import KeyPad from './KeyPad';
import WatchedMovie from './WatchedMovie';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Personal Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'user' })
        }
      />
      <Button
        title="Watched Movie"
        onPress={() =>
          navigation.navigate('Watched')
        }
      />
      <Button
        title="Want to Watch"
        onPress={() =>
          navigation.navigate('KeyPad')
        }
      />
      <Button
        title="Ticket Counter"
        onPress={() =>
          navigation.navigate('CountChange')
        }
      />
    </View>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Watched" component={WatchedMovie} />
        <Stack.Screen name="KeyPad" component={KeyPad} />
        <Stack.Screen name="CountChange" component={CountChange} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
