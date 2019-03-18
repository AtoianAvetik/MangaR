import React, {Component} from "react";
import { Button, Container, Content, Icon, Text } from "native-base";
import styles from "./styles";

export default class LibraryItemContainer extends Component {
    render() {
        const {navigation} = this.props;
        const name = navigation.getParam("name", "NO_NAME");

        return (
            <Container style={styles.container}>
                <Content>
                    <Text style={{alignSelf: "center", marginTop: 10}}>{name}</Text>
                    <Button onPress={() => this.props.navigation.navigate("Viewer")}>
                        <Text>Viewer</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

