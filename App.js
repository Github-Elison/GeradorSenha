import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")}
      style={styles.logo}
      />
      <StatusBar style="auto" />

      <Text style={styles.title}>20 caracteres</Text>
      <View style={styles.area}>
        <Slider
         style={{Height: 50 }}
         minimumValue={6}
         maximumValue={20}
         maximumTrackTintColor= "#ff0000"
         minimumTrackTintColor= "#000"
         thumbTintColor= "#392de9"
         />

      </View>
      
      <TouchableOpacity style={styles.button}>
        <text style={styles.buttonText}>Gerar Senha</text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 60
  },
  area:{marginTop: 14,
        marginBottom:14,
        width:"80%",
       backgroundColor: "#fff",
       borderRadius: 8,
      padding: 6, },
      button:{
        backgroundColor: "#392de9",
        width: 80%,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      }
});
