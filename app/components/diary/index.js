import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";

class DiaryComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Diary Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default DiaryComponent;
