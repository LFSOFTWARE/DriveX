import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";


import { Container, Button, ButtonText, Title, SubTilte, Input, Space } from "../../style";


const Car = () => {

    const [visiable, setVisiable] = useState(true)
    useEffect(()=>{
        const KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow',()=>setVisiable(false))
  
        const KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide',()=>setVisiable(true))
        return () =>{
            KeyboardDidHideListener.remove();
            KeyboardDidShowListener.remove();

        }
    })
    return (
        <Container
            padding={30}
            justify="flex-start"
        >
            <Container align="flex-start" height={40} >
                <Title>
                    Cadastre seu veiculo
                </Title>
                <SubTilte>
                    Preencha os campos abaixo.
                </SubTilte>
            </Container>
            <Container justify="flex-start">
                <Space height={50} />
                <Input placeholder="Placa do veiculo" />
                <Space />
                <Input placeholder="Marca" />
                <Space />

                <Input placeholder="Modelo" />
                <Space />

                <Input placeholder="Cor" />
            </Container>
            <Container height={70} justify="flex-end">
                {visiable &&
                    <Button>
                        <ButtonText>Comece a usar</ButtonText>
                    </Button>
                }
            </Container>
        </Container>
    )
}



export default Car