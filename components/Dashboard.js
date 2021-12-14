import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

function Dashboard({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Park Space</Text>
        </View>
        <View style={styles.content}>
          <TextInput style={styles.input} placeholder="find parking space at" />
          <TextInput style={styles.input} placeholder="use my location" />
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => {
              navigation.navigate('Available');
            }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mapContainer}>
          <Image source={require('../assets/images/map.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  banner: {
    backgroundColor: '#1E969C',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: 'white',
  },
  content: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 10,
    color: 'black',
    height: 40,
  },
  searchBtn: {
    marginLeft: 10,
    backgroundColor: '#1E969C',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  searchText: {
    color: '#FFFF',
  },
  mapContainer: {
    marginTop: 30,
  },
});

export default Dashboard;
