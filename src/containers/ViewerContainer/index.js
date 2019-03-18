import React, { Component } from "react";
import { StatusBar, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { Container } from "native-base";
import styles from "./styles";

export default class ViewerContainer extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <StatusBar hidden/>
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </Container>
        );
    }
}

