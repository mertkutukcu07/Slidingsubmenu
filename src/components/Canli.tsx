import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Images from '../constants/Images';

const Canli = () => {
  const canliData = [
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

  return (
    <View style={styles.container}>
      <View style={styles.bodyC}>
        <Text style={styles.canliText}>CANLI</Text>
        {canliData.map(item => (
          <TouchableOpacity style={styles.touchCanli} key={item.title}>
            <Image source={item.icon} style={styles.img} />
            <Text style={styles.txt}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Canli;

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
    borderColor: 'red',
  },
  canliText: {
    color: 'white',
    transform: [{rotate: '270deg'}],
    right: moderateScale(30),
    fontSize: moderateScale(11),
    position: 'absolute',
    marginRight: moderateScale(310),
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
