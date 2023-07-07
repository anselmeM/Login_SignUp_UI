import { StyleSheet } from 'react-native';
import { themeColors } from '../theme/theme';

const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'start',
  },
  backButton: {
    backgroundColor: 'yellow',
    padding: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 4,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingTop: 8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  labelText: {
    marginLeft: 4,
    color: 'gray',
  },
  textInput: {
    padding: 4,
    backgroundColor: 'gray',
    color: 'gray',
    borderRadius: 20,
    marginBottom: 3,
  },
  signUpButton: {
    paddingVertical: 12,
    backgroundColor: 'yellow',
    borderRadius: 20,
  },
  signUpButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },
  orText: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 7,
  },
  socialIcon: {
    padding: 2,
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 7,
  },
  createAccountText: {
    color: 'gray',
    fontWeight: '600',
  },
  loginText: {
    fontWeight: 'bold',
    color: 'yellow',
  },
});

export default signUpStyles;
