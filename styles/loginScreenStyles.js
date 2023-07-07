import { StyleSheet } from 'react-native';
import { themeColors } from '../theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  safeArea: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  backButton: {
    backgroundColor: 'yellow',
    padding: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 4,
  },

  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  form: {
    marginTop: 8,
    // flex:.75,
    backgroundColor:'#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    margin:10,
    padding:10,
  },

  labelText: {
    marginLeft: 30,
    color: '#808080',
    marginBottom:5,
  },
  
  textInput: {
    padding: 10,
    backgroundColor: '#c0c0c0',
    color: 'gray',
    borderRadius: 20,
    marginBottom: 10,  
  }, 

  forgotPassword: {
    alignSelf: 'flex-end',
  },

  loginButton: {
    paddingVertical: 12,
    backgroundColor: 'yellow',
    borderRadius: 20,
  },

  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },

  orText: {
    fontSize: 20,
    color:  '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
  },

  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },

  socialIcon: {
    padding: 10,
    borderRadius: 20,
    margin:10,
  },

  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 7,
  },

  createAccountText: {
    color: 'white',
    fontWeight: '600',
  },

  signUpText: {
    fontWeight: '600',
    color: 'yellow',
    paddingLeft:5,
    paddingBottom:10,
  },
  
});
