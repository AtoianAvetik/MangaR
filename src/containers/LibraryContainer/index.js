import React, {Component} from "react";
import {StatusBar, Image, TouchableNativeFeedback, View} from "react-native";
import {
    Container, Content, Text, Grid, Col, Row,
    CardItem, Body, Right, Card
} from "native-base";
import {Toolbar, IconToggle} from "react-native-material-ui";
import {show} from "redux-modal";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import PopupMenu from "../../components/MorePopupMenu";
import styles from "./styles";
import FilterModal from "../../components/Modal/filterModal";

class LibraryContainer extends Component {
    constructor(props) {
        super(props);
    }

    handleOpen(modal) {
        this.props.show(modal, {message: `This is a ${modal} modal`});
    }


    render() {
        return (
            <Container style={styles.container}>
                <StatusBar
                    backgroundColor={styles.statusBar.backgroundColor}
                    barStyle="dark-content"
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
                                        color={styles.toolbar.rightElement.color}
                                        onPress={() => this.handleOpen("filterModal")}/>
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
                                    <TouchableNativeFeedback
                                        delayLongPress={300}
                                        onPress={() => {
                                            console.log("TouchableOpacity onPress");
                                            this.props.navigation.navigate("LibraryItem", {
                                                id: "item1",
                                                name: "Brent"
                                            });
                                        }}
                                        onPressIn={() => {
                                            console.log("TouchableOpacity onPressIn");
                                        }}
                                        onPressOut={() => {
                                            console.log("TouchableOpacity onPressOut");

                                        }}
                                        onLongPress={(e) => {
                                            console.log(" onLongPress");
                                            console.log(Date.now());
                                            console.log(e.type); //undefined
                                        }}
                                    >
                                        <View>
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

                                            <CardItem style={{
                                                paddingTop: 2,
                                                paddingBottom: 2,
                                                paddingRight: 0
                                            }}>
                                                <Body style={{justifyContent: "center"}}>
                                                <Text>Master</Text>
                                                </Body>
                                                <Right>
                                                    <PopupMenu
                                                        actions={["item 1", "item 2"]}
                                                        style={styles.popupMenu}
                                                        onPress={(label) => console.log(label)}/>
                                                </Right>
                                            </CardItem>
                                        </View>
                                    </TouchableNativeFeedback>
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
                <FilterModal/>
            </Container>
        );
    }
}

export default connect(
    null,
    dispatch => bindActionCreators({show}, dispatch))
(LibraryContainer);
