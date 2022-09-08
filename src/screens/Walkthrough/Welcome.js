import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { TextButton } from "../../components";
import { colors, fonts, sizes, images } from '../../constants';

const Welcome = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.light
            }}
        >
            {/* Logo & Title */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.logo}
                    style={{
                        width: 150,
                        height: 150
                    }}
                />

                <Text style={{ marginTop: sizes.padding, ...fonts.h1 }}>
                    Welcome to
                </Text>
                <Text style={{ marginTop: sizes.base, ...fonts.h1 }}>
                    Margaret
                </Text>
            </View>

            {/* Footer Buttons */}
            <View
                style={{
                    paddingHorizontal: sizes.padding,
                    marginBottom: 30
                }}
            >
                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        borderRadius: sizes.radius
                    }}
                    label="Get Started"
                    onPress={() => navigation.navigate("Walkthrough")}
                />

                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        marginTop: sizes.base,
                        backgroundColor: null
                    }}
                    label="Already have an account"
                    labelStyle={{
                        color: colors.primary
                    }}
                //onPress
                />
            </View>
        </View>
    )
}

export default Welcome;