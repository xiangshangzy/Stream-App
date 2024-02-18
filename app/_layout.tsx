import {
    MD3DarkTheme,
    MD3LightTheme,
    PaperProvider
} from 'react-native-paper';
import { Stack } from 'expo-router';
const darkTheme = {
    ...MD3DarkTheme
}
const lightTheme = {
    ...MD3LightTheme
}
export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name='(tab)' options={{ headerShown: false }} />
        </Stack>
    );
}