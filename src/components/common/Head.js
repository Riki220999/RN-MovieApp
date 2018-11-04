import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text
} from "native-base";

class Head extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Body>
                        <Title>  Box Aladin</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>

                        <Button transparent>
                            <Icon name="more" />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff9900",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,

        paddingBottom: 50,


    }
});

export { Head };
