import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";


import { Container, Button, ButtonText, Title, SubTilte, Input, Space, AdressList, AdressItem } from "../../style";


const Ride = () => {

    const [visiable, setVisiable] = useState(true)
    useEffect(() => {
        const KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setVisiable(false))

        const KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setVisiable(true))
        return () => {
            KeyboardDidHideListener.remove();
            KeyboardDidShowListener.remove();

        }
    })
    return (
        <>
            <Container row height={70} justify="flex-start">
                <Container align="flex-start" padding={20} >
                    <SubTilte>Voltar</SubTilte>
                </Container>
                <Container align="flex-start" padding={20} >
                    <Title> Corrida </Title>
                </Container>
                <Container align="flex-end" padding={20} ></Container>
            </Container>

            <Container padding={30} justify="flex-start">
                <Container justify="flex-start" height={90} >
                    <Input placeholder="Placa do veiculo" />
                    <Input placeholder="Marca" />
                </Container>
                <Container>
                    <AdressList
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                        renderItem={({ item, index }) => (<AdressItem >
                            <SubTilte color="black" bold> Menlo Parl</SubTilte>
                            <SubTilte color="black" small> Palo Alto,CA</SubTilte>
                        </AdressItem>)}
                    />

                </Container>
            </Container>

            {visiable && (
                <Container height={90} padding={20} justify="flex-end">

                    <Button>
                        <ButtonText>Comece a usar</ButtonText>
                    </Button>
                </Container>
            )}
        </>
    )
}



export default Ride