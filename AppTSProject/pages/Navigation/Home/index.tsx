import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
const Home = ({navigation}: any) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onFocus = () => {
    // navigation.navigate('Serch');
    navigation.push('Serch');
  };
  const toDoctor = () => {
    navigation.push('Serch');
  };
  const dataList = [
    {
      id: 1,
      title: '惊了！电风扇对着窗外吹，房间里才是最凉快的',
      content:
        '前段时间网上冲浪时，研究所发现了一个非常「诡异」的帖子——电风扇要朝着窗外吹，屋里才会更凉爽。图片来源：网络具体的方法是',
      imgurl:
        'https://img1.dxycdn.com/2022/0627/680/6333053410197296553-22.jpg!w720',
    },
    {
      id: '2',
      title: '倒头就睡的人，居然是做对了这件事！',
      content:
        '有多少人的夜晚是这样的：满心欢喜上床今晚能睡八小时😄……妈呀只有六小时了😟……哎睡四小时也还行吧 😞……',
      imgurl:
        'https://img1.dxycdn.com/2022/0629/932/3696142746541527553-22.jpg!w720',
    },
    {
      id: '3',
      title: '一个让你瞬间爽到的小动作，真的建议你试试！（不是抠鼻屎',
      content:
        '今年的夏天感觉有些潮闷。最近在一些事件的冲击下，很多朋友心情都不怎么好，感觉生活像灌满了水泥一样，疲惫沉闷，很难有让自己',
      imgurl:
        'https://img1.dxycdn.com/2022/0712/809/6696499993944969553-22.jpg!w720',
    },
  ];
  const item = ({item}: any) => {
    return (
      <View style={styles.articleItem}>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.searchInput}>
        <Searchbar
          placeholder="搜索疾病/症状/医生/药品/医院"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onFocus={onFocus}
        />
      </View>
      <View style={styles.service}>
        <TouchableOpacity onPress={toDoctor}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={toDoctor}>
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
        </TouchableOpacity>
        <TouchableOpacity onPress={toDoctor}>
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
        </TouchableOpacity>
      </View>
      <View style={styles.serviceTwo}>
        <TouchableOpacity style={styles.serviceRoute} onPress={toDoctor}>
          <View style={styles.serviceTwoList}>
            <Image
              style={styles.serviceTwoIcon}
              source={{
                uri: 'https://img1.dxycdn.com/2020/0622/267/4682954758695450243-22.png',
              }}
            />
            <Text style={styles.serviceTwoText}>找医院</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceRoute} onPress={toDoctor}>
          <View style={styles.serviceTwoList}>
            <Image
              style={styles.serviceTwoIcon}
              source={{
                uri: 'https://img1.dxycdn.com/2020/0622/267/4682954758695450243-22.png',
              }}
            />
            <Text style={styles.serviceTwoText}>查药品</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceRoute} onPress={toDoctor}>
          <View style={styles.serviceTwoList}>
            <Image
              style={styles.serviceTwoIcon}
              source={{
                uri: 'https://img1.dxycdn.com/2020/0622/267/4682954758695450243-22.png',
              }}
            />
            <Text style={styles.serviceTwoText}>查疫苗</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceRoute} onPress={toDoctor}>
          <View style={styles.serviceTwoList}>
            <Image
              style={styles.serviceTwoIcon}
              source={{
                uri: 'https://img1.dxycdn.com/2020/0622/267/4682954758695450243-22.png',
              }}
            />
            <Text style={styles.serviceTwoText}>健康百科</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <TouchableOpacity>
          <Image
            style={styles.bannerImg}
            source={{
              uri: 'https://img1.dxycdn.com/2021/0419/698/3921739111408936743-22.png',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.psarticles}>
        <View style={styles.head}>
          <Text style={styles.title}>科普文章</Text>
          <Text style={styles.more}>查看更多</Text>
        </View>
        <View>
          {dataList.map((item: any) => {
            return (
              <TouchableOpacity style={styles.articleItem} key={item.id}>
                <View style={styles.artLeft}>
                  <Text style={styles.artLeftTitle}>{item.title}</Text>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={styles.artLeftContent}>
                    {item.content}
                  </Text>
                </View>
                <View style={styles.artRight}>
                  <Image
                    source={{
                      uri: item.imgurl,
                    }}
                    style={styles.artRightImg}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* <View style={styles.articleItem}>
          <Text>{134}</Text>
        </View>
        <View style={styles.articleItem}>
          <Text>{345}</Text>
        </View> */}
        {/* <FlatList
        data={dataList}
        renderItem={item}
        keyExtractor={item => item.id}
      /> */}
      </View>
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
    height: 115,
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
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
  },
  serviceRoute: {
    flex: 1,
  },
  serviceTwoList: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
    textAlign: 'center',
    alignContent: 'center',
  },
  serviceTwoText: {
    marginTop: 4,
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  serviceTwoIcon: {
    width: 40,
    height: 40,
  },
  banner: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 125,
  },
  bannerImg: {
    height: '100%',
    borderRadius: 10,
  },
  psarticles: {},
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    color: '#333333',
  },
  more: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  articleItem: {
    height: 120,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  artLeft: {
    width: '75%',
  },
  artRight: {
    width: 80,
    marginLeft: 14,
    borderRadius: 5,
    overflow: 'hidden',
  },
  artLeftTitle: {
    height: 48,
    color: '#333333',
    marginBottom: 10,
    fontSize: 17,
  },
  artLeftContent: {
    height: 18,
    color: '#4D4D4D',
    ellipsizeMode: 'tail',
  },
  artRightImg: {
    width: 80,
    height: 80,
  },
});

export default Home;
