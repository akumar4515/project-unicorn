import { Image,Text, View,TouchableOpacity, ImageBackground } from "react-native";
import styles from './style.jsx';
import { LinearGradient } from 'expo-linear-gradient';
export default function Index() {
  return (
   
    <View style={styles.MainView}>
      <View style={styles.header}>
      <View style={styles.about}>
        <Text style={styles.aboutIcon}>!</Text>
      </View>
      </View>
    
      <ImageBackground
    source={require("../assets/images/auth/auth1.jpeg" )}
        style={styles.background}>
      
      <View style={styles.auth}>

   

      <View style={styles.btnArrange}>
  
    
      <TouchableOpacity style={styles.authBtn} onPress={() => alert('Login pressed')}>
      <LinearGradient
      colors={['#313131', '#7a39df', '#313131']} // Gradient colors
      style={styles.button}
    >
        <Text style={styles.buttonText}>LOGIN</Text>
        </LinearGradient>
      </TouchableOpacity>
   

      
      <TouchableOpacity style={styles.authBtn} onPress={() => alert('Sign Up pressed')}>
      <LinearGradient
      colors={['#313131', '#7a39df', '#313131']} // Gradient colors
      style={styles.button}
    >
        <Text style={styles.buttonText}>SIGN UP</Text>
        </LinearGradient>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.authBtn} onPress={() => alert('Play as Guest pressed')}>
      <LinearGradient
      colors={['#47444b', '#f31010', '#47444b']} // Gradient colors
      style={styles.button}
    >
        <Text style={styles.buttonText}>PLAY AS GUEST</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>

      </View>
      
      </ImageBackground>
      </View>
  


  );
}



