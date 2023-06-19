import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
    const [num, setNum] = useState(0)
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('counter')
            let data = null
            data = JSON.parse(jsonValue)
            setNum(data)

        } catch (e) {
            console.log("error in getData ")
            console.dir(e)
        }
    }

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('counter', jsonValue)
        } catch (e) {
            console.log("error in storeData ")
            console.dir(e)
        }
    }

    useEffect(() => { getData() }, [])

    return (
        <View>
            <Text style={{ fontSize: 40 }}>
                Watched Movie
            </Text>
            <Text style={{ fontSize: 20 }}>
                Total number:{num}
            </Text>
            <View style={{ flex: 1, flexDirection: 'row' }} >
                <Button
                    title="Action"
                    onPress={() => {
                        setNum(num + 1);
                        storeData(num + 1);
                    }}
                />
                <Button
                    title="Love"
                    onPress={() => {
                        setNum(num + 1);
                        storeData(num + 1);
                    }}
                />
                <Button
                    title="Thrill"
                    onPress={() => {
                        setNum(num + 1);
                        storeData(num + 1);
                    }}
                />
                <Button
                    title="History"
                    onPress={() => {
                        setNum(num + 1);
                        storeData(num + 1);
                    }}
                />
                <Button
                    title="Fantasy"
                    onPress={() => {
                        setNum(num + 1);
                        storeData(num + 1);
                    }}
                />
            </View>
        </View>
    )
}


export default App;
