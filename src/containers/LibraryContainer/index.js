import React, {Component} from "react";
import {StatusBar, Image, TouchableNativeFeedback, View} from "react-native";
import {
    Container, Content, List, ListItem, Text, Grid, Col, Row,
    CardItem, Body, Right, Card
} from "native-base";
import {Toolbar, IconToggle} from "react-native-material-ui";
import Ripple from 'react-native-material-ripple';

import PopupMenu from "../../components/MorePopupMenu";
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
                                        key="filter"
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
                    <Grid>
                        <Row>
                            <Col>
                                <Card style={styles.mb}>
                                    <Ripple
                                        delayLongPress={300}
                                        onPress={() => console.log('TouchableOpacity onPress')}
                                        onPressIn ={() => {
                                            console.log('TouchableOpacity onPressIn');
                                        }}
                                        onPressOut ={() => {
                                            console.log('TouchableOpacity onPressOut');
                                            this.props.navigation.navigate("LibraryItem", {
                                                id: "item1",
                                                name: "Brent"
                                            });
                                        }}
                                        onLongPress ={(e)=>{
                                            console.log(' onLongPress');
                                            console.log(Date.now());
                                            console.log(e.type); //undefined
                                        }}
                                    >
                                        <CardItem cardBody>
                                            <Image
                                                style={{
                                                    resizeMode: "cover",
                                                    width: null,
                                                    height: 200,
                                                    flex: 1
                                                }}
                                                source={{uri: "http://imgcover.mangachan.me/showfull_retina/uploads/posts/2015-11/thumbs/1446973523_nude-na-shisen_v1_ch1_001.jpg"}}
                                            />
                                        </CardItem>

                                        <CardItem style={{ paddingVertical: 0 }}>
                                            <Body>
                                                <Text>Master</Text>
                                            </Body>
                                        </CardItem>
                                    </Ripple>
                                </Card>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

