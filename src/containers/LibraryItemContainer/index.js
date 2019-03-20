import React, {Component} from "react";
import {ImageBackground, View} from "react-native";
import {Header, Left, Right, Button, Container, Content, Text} from "native-base";
import {IconToggle} from "react-native-material-ui";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import PopupMenu from "../../components/MorePopupMenu";

export default class LibraryItemContainer extends Component {
    render() {
        const {navigation} = this.props;
        const name = navigation.getParam("name", "NO_NAME");

        return (
            <Container style={styles.container}>
                <ImageBackground
                    source={{uri: "http://imgcover.mangachan.me/showfull_retina/uploads/posts/2015-11/thumbs/1446973523_nude-na-shisen_v1_ch1_001.jpg"}}
                    style={styles.background.container}
                    resizeMode={"cover"}>
                    <LinearGradient
                        useAngle={true}
                        angle={180}
                        angleCenter={{x: 0.5, y: 0.2}}
                        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0)"]}
                        style={styles.background.gradient}/>
                </ImageBackground>
                <Header
                    translucent={true}
                    androidStatusBarColor={"rgba(18, 128, 238, 0)"}
                    style={styles.header.container}
                    transparent>
                    <Left>
                        <IconToggle iconSet="Feather"
                                    name="arrow-left"
                                    color="#fff"
                                    onPress={() => this.props.navigation.goBack()}/>
                    </Left>
                    <Right>
                        <PopupMenu
                            actions={["item 1", "item 2"]}
                            iconColor="#fff"
                            onPress={(label) => console.log(label)}/>
                    </Right>
                </Header>
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

