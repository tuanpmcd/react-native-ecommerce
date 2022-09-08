import React, { useEffect, useRef, useState } from 'react';
import { View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { sizes, constants } from '../../constants';

const ITEM_WIDTH = 120

const Walkthrough1 = () => {
  // Row 1
  const [row1Images, setRow1Images] = useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images
  ])
  const [currentPosition, setCurrentPosition] = useState(0)

  // Row 1
  const [row2Images, setRow2Images] = useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images
  ])
  const [row2CurrentPosition, setRow2CurrentPosition] = useState(0)

  // Ref
  const row1FlatlistRef = useRef()
  const row2FlatlistRef = useRef()

  useEffect(() => {
    let positionTimer

    const timer = () => {
      positionTimer = setTimeout(() => {
        // Slider 1
        setCurrentPosition(prev => {
          const position = Number(prev) + 1
          row1FlatlistRef?.current?.scrollToOffset({
            offset: position,
            animated: false
          })

          const maxOffset = constants.walkthrough_01_01_images.length * ITEM_WIDTH

          if (prev > maxOffset) {
            const offset = prev - maxOffset

            row1FlatlistRef?.current?.scrollToOffset({
              offset,
              animated: false
            })

            return offset
          } else {
            return position
          }
        })

        // Slider 2
        setCurrentPosition(prev => {
          const position = Number(prev) + 1
          row2FlatlistRef?.current?.scrollToOffset({
            offset: position,
            animated: false
          })

          const maxOffset = constants.walkthrough_01_02_images.length * ITEM_WIDTH

          if (prev > maxOffset) {
            const offset = prev - maxOffset

            row1FlatlistRef?.current?.scrollToOffset({
              offset,
              animated: false
            })

            return offset
          } else {
            return position
          }
        })

        timer()
      }, 32)
    }

    timer()

    return () => {
      clearTimeout(positionTimer)
    }
  }, [])

  // Render

  return (
    <View>
      {/* Slider 1 */}
      <FlatList
        ref={row1FlatlistRef}
        horizontal
        decelerationRate='fast'
        showsHorizontalScrollIndicator={false}
        listKey='Slider1'
        scrollEnabled={false}
        keyExtractor={(_, index) => `Slider1_${index}`}
        data={row1Images}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                source={item}
                style={{
                  width: 110,
                  height: 110
                }}
              />
            </View>
          )
        }}
      />

      {/* Slider 2 */}
      <FlatList
        ref={row2FlatlistRef}
        horizontal
        decelerationRate='fast'
        style={{
          marginTop: sizes.padding,
          transform: [{ rotate: '180deg' }]
        }}
        showsHorizontalScrollIndicator={false}
        listKey='Slider2'
        scrollEnabled={false}
        keyExtractor={(_, index) => `Slider2_${index}`}
        data={row2Images}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [{ rotate: '180deg' }]
              }}
            >
              <Image
                source={item}
                style={{
                  width: 110,
                  height: 110
                }}
              />
            </View>
          )
        }}
      />
    </View>
  )
}

export default Walkthrough1;