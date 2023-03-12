import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Markdown from 'react-native-markdown-display';
import { colors, Divider } from 'react-native-elements';
import { Colors } from '../../../styles/colors';
import { FAMILY, SIZE } from '../../../styles/font';
import { Spaces } from '../../../styles/space';
import { limitText } from '../../../util/string';
import markDownStyles from './markDownStyles';
import { selectNews, theState } from '../../../selector/news';
import { News } from '../../../store/news';

const BodyOfKnowledge = () => {
  const news = useSelector(selectNews);
  // console.log('debug: news',news)
  
  const [showMore, setShowMore] = useState<number[]>([]);

  const runShowMore = (index: number) => {
    const copyShowMore = [...showMore];
    (copyShowMore as any)[index] = !copyShowMore[index];
    setShowMore([...copyShowMore]);
  };

  const renderMarkdown = ({ item, index }: { item: News; index: number }) => {

    return (
      <>
        <View style={styles.markDownView}>
          <Markdown style={markDownStyles}>
            {!showMore[index] ? limitText(item.news, 115) : item.news}
          </Markdown>
          <Text style={styles.newsUser}>By {item.user.name}</Text>
          {item.news.length > 170 ? (
            <TouchableOpacity
              style={styles.showMoreBtn}
              onPress={() => {
                runShowMore(index);
              }}>
              <Text style={styles.showMoreText}>
                {showMore[index] ? 'Show less' : 'Show more'}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <Divider style={{ marginHorizontal: 30 }} />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={news}
        renderItem={renderMarkdown}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%"
  },

  markDownView: {
    paddingVertical: 4,
    margin: 30,
  },
  showMoreBtn: {
    backgroundColor: Colors.DirtyWhite,
    marginTop: 10,
    alignSelf: 'flex-start',
    padding: Spaces.Small,
    borderRadius: 10,
  },
  showMoreText: {
    fontFamily: FAMILY.QUICKSAND_REGULAR,
  },
  titleText: {
    fontSize: SIZE.MEDIUM,
    fontFamily: FAMILY.QUICKSAND_BOLD,
    color: Colors.AltRed,
    marginBottom: 15,
  },
  newsUser: {
    marginTop: 15,
    fontSize: SIZE.SMALL,
    fontFamily: FAMILY.QUICKSAND_LIGHT,
  },
});

export default BodyOfKnowledge;
