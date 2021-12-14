import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Park Space</Text>
      </View>
      <TextInput style={styles.input} placeholder="username" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="password"
      />
      <View style={styles.loginBtnSeperator} />
      <Button
        style={styles.loginBtn}
        color="#1E969C"
        title="Login"
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
      />
      <View style={styles.footer}>
        <Text>Don't have an account? Sign Up</Text>
        <Text>Forget Password?</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    fontWeight: 900,
    fontSize: 54,
    color: '#1E969C',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#1E969C',
  },
  footer: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 10,
  },
  loginBtnSeperator: {
    marginTop: 10,
  },
});

export default Login;
