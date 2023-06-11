import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const App = () => {
    const [change, setChange] = useState(0)
    const [num, setNum] = useState(0)
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
                    onPress={() => { setChange(change + 1), setNum(num + 1) }}
                />
                <Button
                    title="Love"
                    onPress={() => [setChange(change + 5), setNum(num + 1)]}
                />
                <Button
                    title="Thrill"
                    onPress={() => [setChange(change + 10), setNum(num + 1)]}
                />
                <Button
                    title="History"
                    onPress={() => [setChange(change + 25), setNum(num + 1)]}
                />
                <Button
                    title="Fantasy"
                    onPress={() => [setChange(change + 50), setNum(num + 1)]}
                />
            </View>
        </View>
    )
}


export default App;