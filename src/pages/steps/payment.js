import React,{useEffect,useState} from "react";
import { Keyboard} from "react-native";


import { Container, Button, ButtonText, Title, SubTilte, Space } from "../../style";
import { CreditCardInput } from "react-native-credit-card-input";


const Payment = () => {

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
                    Escolha como pagar
                </Title>
                <SubTilte>
                    Preencha os dados do cartão de crédito.
                </SubTilte>
            </Container>
            <Container>
                <Space height={50} />
                <CreditCardInput  requiresName/>

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



export default Payment