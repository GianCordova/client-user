import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View } from "react-native"; // <-- Importa esto para probar
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
      <StatusBar sytle="auto" />
    </SafeAreaProvider>
  );
}