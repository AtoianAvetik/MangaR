import React, {Component} from "react";
import {Container, Content, Text} from "native-base";
import styles from "./styles";

export default class SettingsContainer extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Text style={{alignSelf: "center", marginTop: 10}}>Settings</Text>
                </Content>
            </Container>
        );
    }
}

