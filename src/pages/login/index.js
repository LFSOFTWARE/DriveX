import React from "react";
import { Image, Text } from "react-native";

import { logo } from '../../assets/logo.png'
import { Container, Button, ButtonText, } from "../../style";
import {LogBox} from "react-native";
import social from '../../services/social'
LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])

const Login = () => {
    return (
        <Container color="info50" justify="flex-end" >
            <Container
                justify="space-around"
                padding={30}
                position="absolute"
                height={270}
                top={0}
                zIndex={9}

            >
                <Image source={require('../../assets/logo.png')} />
                <Button type="info">
                    <ButtonText color="light">Fazer login com Facebook</ButtonText>
                </Button>
                <Button type="light">
                    <ButtonText >Fazer login com google</ButtonText>
                </Button>
            </Container>
            <Image source={require('../../assets/car.png')} />

        </Container>

    )
}


export default Login