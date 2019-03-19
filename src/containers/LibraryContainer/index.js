import React, {Component} from "react";
import {StatusBar} from "react-native";
import {
    Container,
    Content,
    List,
    ListItem,
    Text
} from "native-base";
import {Toolbar, IconToggle} from "react-native-material-ui";
import styles from "./styles";

export default class LibraryContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <StatusBar
                    backgroundColor="rgba(255, 255, 255, 0.10)"
                    barStyle="dark-content"
                    animated
                    translucent/>
                <Toolbar
                    leftElement="menu"
                    onLeftElementPress={() => this.props.navigation.toggleMainDrawer()}
                    centerElement="Library"
                    searchable={{
                        autoFocus: true,
                        placeholder: "Search",
                    }}
                    rightElement={{
                        actions: [
                            <IconToggle iconSet="Feather"
                                        name="filter"
                                        color="#000"
                                        onPress={() => this.props.navigation.toggleFilterDrawer()}/>
                        ],
                        menu: {
                            icon: "more-vert",
                            labels: ["item 1", "item 2"]
                        }
                    }}
                    onRightElementPress={(label) => {
                        console.log(label);
                    }}
                    style={styles.toolbar}
                />
                <Content bounces={false}>
                    <List>
                        <ListItem
                            onPress={() => this.props.navigation.navigate("LibraryItem", {
                                id: "item1",
                                name: "Brent",
                                backButton: true
                            })}
                            noBorder>
                            <Text>Library Item</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

