import React, { Component } from "react";
import { Body, Button, Container, Content, Header, Icon, Left, List, ListItem, Right, Text, Title } from "native-base";
import styles from "./styles";
import Menu from "react-native-material-menu/src/Menu";
import { MenuDivider, MenuItem } from "react-native-material-menu";

export default class LibraryContainer extends Component {
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header
                    translucent={true}
                    iosBarStyle={"dark-content"}
                    androidStatusBarColor={"rgba(255, 255, 255, 0.10)"}
                    style={styles.headerContainer}>
                    <Left style={styles.headerLeft}>
                        <Button transparent rounded androidRippleColor style={styles.iconButton} onPress={() => this.props.navigation.toggleMainDrawer()}>
                            <Icon type="Feather" name="menu" style={{ color: "#000" }}/>
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                        <Title style={styles.textBody}>Library</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent rounded androidRippleColor style={styles.iconButton} onPress={() => this.props.navigation.toggleFilterDrawer()}>
                            <Icon type="Feather" name="filter" style={{ fontSize: 20, color: "#000" }}/>
                        </Button>
                        <Menu
                            style={{ top: 40 }}
                            ref={this.setMenuRef}
                            button={
                                <Button transparent rounded androidRippleColor style={styles.iconButton} onPress={this.showMenu}>
                                    <Icon type="Ionicons" name="more" style={{ fontSize: 24,color: "#000" }}/>
                                </Button>
                            }
                        >
                            <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                            <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                            <MenuItem onPress={this.hideMenu} disabled>
                                Menu item 3
                            </MenuItem>
                            <MenuDivider/>
                            <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
                        </Menu>
                    </Right>
                </Header>
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

