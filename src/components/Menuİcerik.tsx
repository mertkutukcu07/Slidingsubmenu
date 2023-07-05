import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Images from '../constants/Images';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Bultenim from './Bultenim';
import Canli from './Canli';
import MacOnu from './MacOnu';

const MenuIcerik = () => {
  const SECTIONS = [
    {
      title: 'Bültenim',
      icon: Images.img.star,
      content: <Bultenim />,
    },
    {
      title: 'Canlı',
      icon: Images.img.handred,
      content: <Canli />,
    },
    {
      title: 'MacOnü',
      icon: Images.img.handgreen,
      content: <MacOnu />,
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const opacityValues = useRef(
    SECTIONS.map(() => new Animated.Value(1)),
  ).current;

  const handleItemPress = index => {
    setSelectedItem(index);

    Animated.timing(opacityValues[index], {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const resetSelectedItem = () => {
    setSelectedItem(null);
  };

  return (
    <View style={[styles.container, {justifyContent: 'space-between'}]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          height: moderateVerticalScale(50),
        }}>
        {SECTIONS.map((item, index) => (
          <TouchableOpacity
            style={styles.bodyC}
            key={item.title}
            onPress={() => handleItemPress(index)}>
            <View>
              <Animated.View
                style={[
                  styles.iconC,
                  {opacity: opacityValues[index]},
                  selectedItem === index && styles.selectedItem,
                ]}>
                <Image style={styles.itemImage} source={item.icon} />
                {selectedItem !== index && (
                  <Text style={styles.buttonTxt}>{item.title}</Text>
                )}
              </Animated.View>
              {selectedItem === index && (
                <View style={styles.contentContainer}>{item.content}</View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MenuIcerik;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  itemImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  bodyC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: moderateScale(25),
  },
  iconC: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateVerticalScale(5),
  },
  selectedItem: {
    opacity: 0,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: moderateVerticalScale(50),
  },
  buttonTxt: {
    color: 'white',
  },
});
