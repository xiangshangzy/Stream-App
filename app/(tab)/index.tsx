import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import * as React from 'react';

const MyComponent = () => {
    const [text, setText] = React.useState("");

    return (
        <TextInput
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
        />
    );
};

export default function Page() {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello</Text>
            <MyComponent />
        </View>
    )
}