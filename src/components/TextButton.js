import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';
import { fonts, colors } from "../constants";

const TextButton = ({
    contentContainerStyle,
    disabled,
    label,
    labelStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.primary,
                ...contentContainerStyle
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={{ color: colors.secondary, ...fonts.h3, ...labelStyle }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton;