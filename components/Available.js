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
          <TextInput style={styles.input} placeholder="use my location" />
          <TouchableOpacity style={styles.searchBtn}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.result}>
          <View style={styles.resultList}>
            <Text style={styles.location}>Telliskivi | 1.2Km</Text>
            <Text style={styles.direction}>Directions</Text>
          </View>
          <View style={styles.resultList}>
            <Text>Available parking spaces: 4</Text>
            <Text>€ 0.40/Hour</Text>
          </View>
          <View style={styles.seperator} />
          <View style={styles.booking}>
            <Text style={styles.bookingTitle}>Book Park Space</Text>
            <View style={styles.bookingList}>
              <View style={styles.bookListItem}>
                <Text>Start Time</Text>
                <Text>10:00</Text>
              </View>
              <View style={styles.bookListItem}>
                <Text>Duration</Text>
                <Text>02 Hours</Text>
              </View>
              <View style={styles.bookListItem}>
                <Text>Amount</Text>
                <Text>€ 0.80</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.payBtn}
            onPress={() => {
              navigation.navigate('PaymentGateway');
            }}>
            <Text style={styles.payBtnText}>Pay</Text>
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
    justifyContent: 'space-between',
    marginHorizontal: 15,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 10,
    color: 'black',
    height: 40,
    width: 250,
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
    marginTop: 20,
  },
  result: {
    display: 'flex',
  },
  resultList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },
  location: {
    fontWeight: 'bold',
    color: 'black',
  },
  direction: {
    color: '#1E969C',
  },
  seperator: {
    marginTop: 15,
    height: 1,
    backgroundColor: '#D3D3D3',
  },
  bookingTitle: {
    marginTop: 15,
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
  bookListItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
  },
  payBtn: {
    marginHorizontal: 15,
    marginTop: 15,
    backgroundColor: '#1E969C',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  payBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Dashboard;
