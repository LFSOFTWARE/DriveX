import React from "react";
import { Image, Text } from "react-native";


import { Container, Button, ButtonText, Title, SubTilte,PickerButton } from "../../style";


const Type = () => {
    return (
        <Container
            padding={30}
            justify="flex-start"
        >
            <Container align="flex-start" height={40} >
                <Title>
                    Passageiro ou Motorista?
                </Title>
                <SubTilte>
                    Selecione qual será a sua função no DriverX.
                </SubTilte>
            </Container>
            <Container>
                <PickerButton >
                    <Image  source={require("../../assets/mot.png")}/>
                    <Title>
                    Motorista
                </Title>
                </PickerButton>
                <PickerButton action>
                    <Image  source={require("../../assets/hand.png")}/>
                    <Title>
                    Passageiro
                </Title>
                </PickerButton>
            </Container>
            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText>Proximo passo</ButtonText>
                </Button>
            </Container>
        </Container>
    )
}



export default Type