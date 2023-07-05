import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Images from '../constants/Images';
import Menuİcerik from '../components/Menuİcerik';

const SlidingSubmenu = ({route}) => {
  const [menuAcik, setMenuAcik] = useState(false);
  const menuOffset = useState(new Animated.Value(0))[0];

  const toggleMenu = () => {
    Animated.timing(menuOffset, {
      toValue: menuAcik ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setMenuAcik(!menuAcik);
  };

  const menuTranslateX = menuOffset.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0], // Menülerin yatayda kaydırılacağı mesafe
  });

  return (
    <View style={styles.container}>
      {/* Ana menü düğmesi */}
      <TouchableOpacity style={styles.addButton} onPress={toggleMenu}>
        <Image source={Images.img.filter} style={styles.img} />
        <Text style={styles.filterTxt}>Filtre</Text>
      </TouchableOpacity>

      {/* Menüler */}
      {menuAcik && (
        <Animated.View
          style={[
            styles.menuContainer,
            {transform: [{translateX: menuTranslateX}]},
          ]}>
          <Menuİcerik />
        </Animated.View>
      )}
    </View>
  );
};

export default SlidingSubmenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: moderateScale(16),
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: moderateScale(50),
    height: moderateVerticalScale(50),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: moderateVerticalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    right: moderateScale(50),
    backgroundColor: 'black',
    elevation: 4,
    paddingVertical: moderateVerticalScale(8),
    paddingHorizontal: moderateScale(16),
  },
  menuItem: {
    paddingHorizontal: moderateScale(8),
  },
  img: {
    width: moderateScale(24),
    height: moderateVerticalScale(24),
  },
  filterTxt: {
    color: 'white',
  },
});
