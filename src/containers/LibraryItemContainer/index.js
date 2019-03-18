import React, { Component } from "react";
import { Image } from "react-native";
import { Body, Button, Container, Content, Header, Icon, Left, Right, Text, Title } from "native-base";
import styles from "./styles";
import Menu from "react-native-material-menu/src/Menu";
import { MenuDivider, MenuItem } from "react-native-material-menu";

export default class LibraryItemContainer extends Component {
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
        const { navigation } = this.props;
        const name = navigation.getParam("name", "NO_NAME");

        return (
            <Container style={styles.container}>
                <Header
                    translucent={true}
                    androidStatusBarColor={"rgba(18, 128, 238, 0)"}
                    style={styles.headerContainer}
                    transparent>
                    <Left style={styles.headerLeft}>
                        <Button transparent rounded androidRippleColor style={styles.iconButton}
                                onPress={() => this.props.navigation.pop()}>
                            <Icon type="Feather" name="arrow-left"/>
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                    <Title style={styles.textBody}>{name}</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent rounded androidRippleColor style={styles.iconButton}
                                onPress={() => this.props.navigation.toggleFilterDrawer()}>
                            <Icon type="Feather" name="filter" style={{ fontSize: 20 }}/>
                        </Button>
                        <Menu
                            style={{ top: 40 }}
                            ref={this.setMenuRef}
                            button={
                                <Button transparent rounded androidRippleColor style={styles.iconButton}
                                        onPress={this.showMenu}>
                                    <Icon type="Ionicons" name="more" style={{ fontSize: 24 }}/>
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
                <Content style={styles.content}>
                    <Image source={{ uri: "https://facebook.github.io/react/logo-og.png" }} style={{height: 200, width: null}}/>
                    <Text style={{ alignSelf: "center", marginTop: 10 }}>{name}</Text>
                    <Button onPress={() => this.props.navigation.navigate("Viewer")}>
                        <Text>Viewer</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

