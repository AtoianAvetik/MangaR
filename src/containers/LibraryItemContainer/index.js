import React, {Component} from "react";
import {Image, StatusBar} from "react-native";
import {Button, Container, Content, Text} from "native-base";
import {Toolbar, IconToggle} from "react-native-material-ui";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

export default class LibraryItemContainer extends Component {
    render() {
        const {navigation} = this.props;
        const name = navigation.getParam("name", "NO_NAME");

        return (
            <Container style={styles.container}>
                <StatusBar
                    backgroundColor="rgba(255, 255, 255, 0)"
                    barStyle="light-content"
                    animated
                    translucent/>
                <Image source={{uri: "http://imgcover.mangachan.me/showfull_retina/uploads/posts/2015-11/thumbs/1446973523_nude-na-shisen_v1_ch1_001.jpg"}} style={styles.bgImage}/>
                <LinearGradient
                    useAngle={true}
                    angle={180}
                    angleCenter={{ x: 0.5, y: 0.2}}
                    colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0)"]}
                    style={styles.bgGradient} />
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    rightElement={{
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
                <Content style={styles.content}>
                    <Text style={{alignSelf: "center", marginTop: 10}}>{name}</Text>
                    <Button onPress={() => this.props.navigation.navigate("Viewer")}>
                        <Text>Viewer</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

