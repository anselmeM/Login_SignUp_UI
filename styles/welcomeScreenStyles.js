// styles.js
import { StyleSheet } from 'react-native';
import { themeColors } from '../theme/theme';


export const welcomeScreenStyles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 4,
  },

  welcomeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  welcomeImage: {
    width: 300,
    height: 500,
  },

  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 7,
  },

  signUpButton: {
    paddingVertical: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },

  signUpButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },

  accountTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  accountText: {
    color: 'white',
    fontWeight: 'bold',
  },

  loginButton: {
    fontWeight: 'bold',
    color: 'yellow',
    paddingLeft:5,
  },
  
});

