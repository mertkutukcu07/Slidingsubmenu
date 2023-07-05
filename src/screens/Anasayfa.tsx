import {StyleSheet, View} from 'react-native';
import React from 'react';
import SlidingSubmenu from '../components/SlidingSubmenu';

const Anasayfa = () => {
  return (
    <View style={styles.container}>
      <SlidingSubmenu />
    </View>
  );
};

export default Anasayfa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
