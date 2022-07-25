import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {Searchbar} from 'react-native-paper';
const Home = ({navigation}: any) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onFocus = () => {
    // navigation.navigate('Serch');
    navigation.push('Serch');
  };
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.searchInput}>
        <Searchbar
          placeholder="搜索疾病/症状/医生/药品/医院"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onFocus={onFocus}
        />
      </View>
      <View style={styles.service}>
        <View style={styles.serviceList}>
          <Image
            style={styles.serviceIcon}
            source={{
              uri: 'https://img1.dxycdn.com/2022/0325/100/4183209292257549353-22.png',
            }}
          />
          <Text style={styles.serviceTitle}>问医生</Text>
          <Text style={styles.serviceText}>科室分类</Text>
        </View>
        <View style={styles.serviceList}>
          <Image
            style={styles.serviceIcon}
            source={{
              uri: 'https://img1.dxycdn.com/2022/0325/517/6135714541057549353-22.png',
            }}
          />
          <Text style={styles.serviceTitle}>义诊</Text>
          <Text style={styles.serviceText}>问诊0元起</Text>
        </View>
        <View style={styles.serviceList}>
          <Image
            style={styles.serviceIcon}
            source={{
              uri: 'https://img1.dxycdn.com/2022/0325/973/8839708506896549353-22.png',
            }}
          />
          <Text style={styles.serviceTitle}>查疾病</Text>
          <Text style={styles.serviceText}>别查</Text>
        </View>
      </View>
      <View style={styles.serviceTwo}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    // margin: '0 auto',
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  service: {
    width: '100%',
    height: 107,
    // backgroundColor: 'grey',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceList: {
    // flex: 1,
    width: 70,
    // backgroundColor: 'red',
    height: '100%',
  },
  serviceIcon: {
    width: 70,
    height: 70,
  },
  serviceTitle: {
    color: '#1A1A1A',
    textAlign: 'center',
    marginTop: 2,
    fontSize: 15,
  },
  serviceText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
  serviceTwo: {
    paddingBottom: 18,
    paddingHorizontal: 5,
    height: 84,
    backgroundColor: 'red',
  },
});

export default Home;
