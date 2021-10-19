import React, {Component} from "react";
import {View, Image} from "react-native";

import LogoImage from '../../assets/images/logo.png';

const LogoComponent = () => (
    <View style={{alignItems: 'center', marginBottom: 30}}>
        <Image
            source={LogoImage}
            resizeMode={'contain'}
            style={{
                width: 300,
                height: 88
            }}
        />
    </View>
)

export default LogoComponent;
