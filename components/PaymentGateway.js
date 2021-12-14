import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Payment Gateway</Text>
      </View>
      <TextInput style={styles.input} placeholder="card number" />
      <TextInput style={styles.input} placeholder="CVV" />
      <View style={styles.dateWrapper}>
        <TextInput style={styles.month} placeholder="MM" />
        <TextInput style={styles.year} placeholder="yyyy" />
      </View>
      <View style={styles.loginBtnSeperator} />
      <TouchableOpacity
        style={styles.payBtn}
        onPress={() => {
          Alert.alert('Confirmation', 'Your booking has been confirmed', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
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
  dateWrapper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  month: {
    width: 100,
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    marginRight: 10,
  },
  year: {
    width: 100,
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    marginRight: 10,
  },
  payBtn: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#1E969C',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
