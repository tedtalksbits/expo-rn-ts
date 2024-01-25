import { StatusBar } from 'expo-status-bar';
import {
  Appearance,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { appConfig } from './app-config';

export default function App() {
  const { title, logoImage } = appConfig.meta;
  const { theme, borderRadius } = appConfig;
  const colorScheme = useColorScheme() as keyof typeof theme;
  const { colors } = theme[colorScheme];
  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.background(),
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: colors.foreground(),
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        System Theme {colorScheme}
      </Text>
      <Text
        style={{
          color: colors.primary(),
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
      <Image source={logoImage} />
      {/* creat a card component */}
      <View
        style={{
          backgroundColor: colors.card(),
          width: 100,
          height: 100,
          borderRadius: borderRadius?.lg || 10,
          padding: 10,
          borderColor: colors.border(),
          borderWidth: 1,
          margin: 10,
        }}
      ></View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary(),
          borderRadius: borderRadius?.lg || 10,
          padding: 10,
          borderColor: colors.border(),
          borderWidth: 1,
          margin: 10,
        }}
        onPress={() =>
          Appearance.setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
        }
      >
        <Text style={{ color: colors.foreground() }}>Button</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background(),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
