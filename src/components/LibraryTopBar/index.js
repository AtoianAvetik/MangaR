import React, {Component} from "react";
import {Animated, Easing} from "react-native";
import {
    Header, Left, Button, Body, Title, Right, Icon
} from "native-base";

import styles from "./styles";

class FadeRotateView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        };
    };

    componentWillMount() {
        this._visibility = new Animated.Value(this.props.visible ? 1 : 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({visible: true});
        }
        Animated.timing(this._visibility, {
            toValue: nextProps.visible ? 1 : 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            this.setState({visible: nextProps.visible});
        });
    }

    render() {
        const {visible, style, children, ...rest} = this.props;

        const containerStyle = {
            opacity: this._visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
            transform: [
                {
                    rotate: this._visibility.interpolate({
                        inputRange: [0, 1],
                        outputRange: this.props.rotateOutputRange || ["-180deg", "0deg"]
                    }),
                }
            ],
        };

        const combinedStyle = [containerStyle, style, {zIndex: this.props.visible ? 1 : 0}];
        return (
            <Animated.View style={combinedStyle} {...rest}>
                {children}
            </Animated.View>
        );
    }
}

export default class LibraryTopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;
        const name = navigation.getParam("name", "Library");
        const id = navigation.getParam("id", false);
        const showBackButton = navigation.getParam("backButton", false);

        return (
            <Header
                noShadow
                iosBarStyle={"dark-content"}
                androidStatusBarColor={"#fff"}
                style={{borderBottomWidth: 1}}>
                <Left style={styles.headerLeft}>
                    <FadeRotateView style={styles.leftButton} rotateOutputRange={["-180deg", "0deg"]}
                                    visible={showBackButton}>
                        <Button transparent onPress={() => this.props.navigation.pop()}>
                            <Icon type="Feather" name="arrow-left" style={{color: "#000"}}/>
                        </Button>
                    </FadeRotateView>
                    <FadeRotateView style={styles.leftButton} rotateOutputRange={["0deg", "-180deg"]}
                                    visible={!showBackButton}>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon type="Feather" name="menu" style={{color: "#000"}}/>
                        </Button>
                    </FadeRotateView>
                </Left>
                <Body style={styles.headerBody}>
                <Title style={styles.textBody}>{name}</Title>
                </Body>
                <Right style={styles.headerRight}/>
            </Header>
        );
    }
}
