import React, {Component} from "react";
import styles from "./styles";
import {Container, Content, Text} from "native-base";

export default class LibraryFilterContainer extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Text>Filter</Text>
                </Content>
            </Container>
        );
    }
}

