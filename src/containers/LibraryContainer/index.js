import React, {Component} from "react";
import {Container, Content, List, ListItem, Text} from "native-base";
import styles from "./styles";

export default class LibraryContainer extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content bounces={false}>
                    <List>
                        <ListItem
                            onPress={() => this.props.navigation.navigate("LibraryItem", { id: "item1", name: "Brent", backButton: true })}
                            noBorder>
                            <Text>Library Item</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

