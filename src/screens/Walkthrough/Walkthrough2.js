import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { sizes, images } from '../../constants';

const Walkthrough2 = ({ animate }) => {

  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden'
      }}
    >
      <Image
        source={images.walkthrough_02_01}
        style={{
          ...styles.image,
          top: '35%',
          left: '35%',
          width: 106,
          height: 161,
          zIndex: 1
        }}
      />

      <Image
        source={images.walkthrough_02_02}
        style={{
          ...styles.image,
          top: '50%',
          left: '50%',
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: 86,
    height: 112,
    zIndex: 0,
    borderRadius: sizes.radius
  }
})

export default Walkthrough2;