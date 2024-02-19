import "../global.css"
import {
    MD3DarkTheme,
    MD3LightTheme,
    PaperProvider
} from 'react-native-paper';
import { Stack } from 'expo-router';
import { useThemeStore } from '../common/store';
const darkTheme = {
    ...MD3DarkTheme
}
const lightTheme = {
    ...MD3LightTheme
}

export default function RootLayout() {
    const { dark } = useThemeStore()
    return (
        <PaperProvider theme={dark ? darkTheme : lightTheme}>
            <Stack>
                <Stack.Screen name='(tab)' options={{ headerShown: false }} />
            </Stack>
        </PaperProvider>

    );
}