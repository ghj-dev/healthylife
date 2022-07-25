import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onFocus = () => {};
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.searchInput}>
        <Searchbar
          placeholder="搜索疾病/症状/医生/药品/医院"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onFocus={onFocus}
          autoFocus={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    // margin: '0 auto',
    padding: 10,
  },
});

export default Home;
