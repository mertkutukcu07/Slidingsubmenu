import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import Images from '../constants/Images';

const Bültenim = () => {
  const bultenData = [
    {
      title: 'Voleybol',
      icon: Images.img.ball,
    },
    {
      title: 'Buz Hokeyi',
      icon: Images.img.ball,
    },
    {
      title: 'Hentbol',
      icon: Images.img.ball,
    },
    {
      title: 'Uzun Vadeli',
      icon: Images.img.ball,
    },
    {
      title: 'MMA',
      icon: Images.img.ball,
    },
  ];
  const handleFilter = item => {
    // İlgili filtreleme işlemlerini burada gerçekleştireceğiz.
    console.log(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyC}>
        <Text style={styles.canliText}>BÜLTENİM</Text>
        {bultenData.map(item => (
          <TouchableOpacity
            onPress={() => handleFilter(item)}
            style={styles.touchCanli}
            key={item.title}>
            <Image source={item.icon} style={styles.img} />
            <Text style={styles.txt}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Bültenim;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(20),
  },
  bodyC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(10),
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderLeftWidth: 30,
    borderColor: '#D79E14',
  },
  canliText: {
    color: 'white',
    transform: [{rotate: '270deg'}],
    right: moderateScale(30),
    fontSize: moderateScale(8),
    position: 'absolute',
    marginRight: moderateScale(307),
  },
  img: {
    width: 18,
    height: 18,
  },
  touchCanli: {
    alignItems: 'center',
    gap: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(10),
  },
  txt: {
    color: 'white',
    fontSize: moderateScale(10),
  },
});
