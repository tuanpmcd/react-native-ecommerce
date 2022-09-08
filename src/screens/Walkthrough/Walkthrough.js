import React, { useRef, useState } from 'react';
import { View, Text, Animated } from 'react-native';
import { TextButton } from "../../components";
import { colors, fonts, sizes, constants } from '../../constants';
import Walkthrough1 from './Walkthrough1';
import Walkthrough2 from './Walkthrough2';

const Walkthrough = () => {
    const [walkthrough2Animate, setWalkthrough2Animate] = useState(false)

    const onViewableItemsChanged = ({ viewableItems, changed }) => {
        console.log(viewableItems);
        if (viewableItems[0].index == 1) {
            setWalkthrough2Animate(true)
        }
    };

    const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }])

    const scrollX = useRef(new Animated.Value(0)).current

    const Dots = () => {
        const dotPosition = Animated.divide(scrollX, sizes.width)

        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {
                    constants.walkthrough.map((item, index) => {
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [colors.dark08, colors.primary, colors.dark08],
                            extrapolate: 'clamp'
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                style={{
                                    borderRadius: 5,
                                    marginHorizontal: 6,
                                    width: 10,
                                    height: 10,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: sizes.height * 0.2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: sizes.padding,
                    paddingVertical: sizes.height > 700 ? sizes.padding : 20
                }}
            >
                {/* Dots */}
                <Dots />

                {/* Buttons */}
                <View
                    style={{
                        flexDirection: 'row',
                        height: 55
                    }}
                >
                    <TextButton
                        label='Join Now'
                        contentContainerStyle={{
                            flex: 1,
                            borderRadius: sizes.radius,
                            backgroundColor: colors.lightGrey
                        }}
                        labelStyle={{
                            color: colors.primary,
                            ...fonts.h3
                        }}
                    />

                    <TextButton
                        label='Log In'
                        contentContainerStyle={{
                            flex: 1,
                            marginLeft: sizes.radius,
                            borderRadius: sizes.radius,
                            backgroundColor: colors.primary
                        }}
                        labelStyle={{
                            ...fonts.h3
                        }}
                    />
                </View>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.light
            }}
        >

            <Animated.FlatList
                data={constants.walkthrough}
                keyExtractor={item => item.id}
                horizontal
                snapToInterval={sizes.width}
                decelerationRate='fast'
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                x: scrollX
                            }
                        }
                    }],
                    {
                        useNativeDriver: false
                    }
                )}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: sizes.width,
                                justifyContent: 'center'
                            }}
                        >
                            {/* Animated Images */}
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center'
                                }}
                            >
                                {index == 0 && <Walkthrough1 />}
                                {index == 1 && <Walkthrough2 animate={walkthrough2Animate} />}
                            </View>

                            {/* Title & Description */}
                            <View
                                style={{
                                    height: sizes.height * 0.35,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    paddingHorizontal: sizes.padding
                                }}
                            >
                                <Text
                                    style={{
                                        ...fonts.h1,
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        marginTop: sizes.radius,
                                        alignItems: 'center',
                                        ...fonts.body3,
                                        color: colors.grey
                                    }}
                                >
                                    {item.sub_title}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

export default Walkthrough;