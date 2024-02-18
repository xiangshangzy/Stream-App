import { View } from "react-native";
import { Button, Switch, Text, TextInput, useTheme } from "react-native-paper";
import * as React from 'react';
import { useThemeStore } from "../../common/store";
import { useState } from "react";

const Input = () => {
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
    const [switchOn, setSwitchOn] = useState(true);
    const themeStore = useThemeStore()
    const theme = useTheme()
    const handleSwitchOn = () => {
        themeStore.setDark(!themeStore.dark)
    }
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: theme.colors.background }}>
            <Text>Home</Text>
            <Switch value={themeStore.dark} onValueChange={handleSwitchOn} />
            <Input />
        </View>
    )
}