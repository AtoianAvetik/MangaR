import React, { Component } from "react";
import { Animated, Easing, View } from "react-native";
import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import Menu, { MenuDivider, MenuItem } from "react-native-material-menu";

import styles from "./styles";

class FadeRotateView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        };
    };

    componentWillMount() {
        this._visibility = new Animated.Value(this.props.visible ? 1 : 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({ visible: true });
        }
        Animated.timing(this._visibility, {
            toValue: nextProps.visible ? 1 : 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            this.setState({ visible: nextProps.visible });
        });
    }

    render() {
        const { visible, style, children, ...rest } = this.props;

        const containerStyle = {
            opacity: this._visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
            }),
            transform: [
                {
                    rotate: this._visibility.interpolate({
                        inputRange: [0, 1],
                        outputRange: this.props.rotateOutputRange || ["-180deg", "0deg"]
                    })
                }
            ]
        };

        const combinedStyle = [containerStyle, style, { zIndex: this.props.visible ? 1 : 0 }];
        return (
            <Animated.View style={combinedStyle} {...rest}>
                {children}
            </Animated.View>
        );
    }
}

export default class LibraryTopBar extends Component {
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
        const name = navigation.getParam("name", "Library");
        const id = navigation.getParam("id", false);
        const showBackButton = navigation.getParam("backButton", false);

        return (
            <View>
                <Header
                    translucent={true}
                    iosBarStyle={"dark-content"}
                    androidStatusBarColor={"rgba(255, 255, 255, 0.10)"}
                    style={styles.headerContainer}>
                    <Left style={styles.headerLeft}>
                        <FadeRotateView style={styles.leftButton} rotateOutputRange={["-180deg", "0deg"]}
                                        visible={showBackButton}>
                            <Button transparent rounded androidRippleColor style={styles.iconButton} onPress={() => this.props.navigation.pop()}>
                                <Icon type="Feather" name="arrow-left" style={{ color: "#000" }}/>
                            </Button>
                        </FadeRotateView>
                        <FadeRotateView style={styles.leftButton} rotateOutputRange={["0deg", "-180deg"]}
                                        visible={!showBackButton}>
                            <Button transparent rounded androidRippleColor style={styles.iconButton} onPress={() => this.props.navigation.toggleMainDrawer()}>
                                <Icon type="Feather" name="menu" style={{ color: "#000" }}/>
                            </Button>
                        </FadeRotateView>
                    </Left>
                    <Body style={styles.headerBody}>
                    <Title style={styles.textBody}>{name}</Title>
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
            </View>
        );
    }
}
