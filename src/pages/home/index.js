import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, Title, Map, Avatar, SubTilte, Space, Input, Button, ButtonText, Vertical, Bullet, PulseCircle } from "../../style";



const Home = () => {
    const tipo = 'm'
    const status = 'c'
    return (
        <Container>
            <Map
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}

                disable={status == 'p'}
            />

            <Container
                position="absolute"
                justify="space-between"
                align="flex-start"
                padding={20}
                zIndex={9999}
                pointerEvents="box-none"
                style={{ height: '100%' }}
            >
                <Container height={100} align="flex-start" justify="flex-start" >

                    {status == 's' && <TouchableOpacity>
                        <Avatar source={{ uri: 'https://media.istockphoto.com/photos/happy-senior-man-with-thumb-up-picture-id504858770?k=20&m=504858770&s=612x612&w=0&h=t7yhynxA8j1V_TW38orLp1Ngyg29dRKE0ZeXl7m-rPw=' }} />
                    </TouchableOpacity>}


                    {status != 's' &&
                        <Container
                            elevation={50}
                            justify="flex-end"
                            color="light"
                        >
                            <Container padding={10}>

                                <Container justify="flex-start" row >
                                    <Bullet />
                                    <SubTilte>{' '}Endereço de embarque</SubTilte>
                                </Container>
                                <Space height={10} />
                                <Container justify="flex-start" row >
                                    <Bullet destination />
                                    <SubTilte>{' '}Endereço de destino</SubTilte>
                                </Container>
                            </Container>
                            <Button type="dark" compact>
                                <ButtonText color="light">
                                    Toque para editar
                                </ButtonText>
                            </Button>
                        </Container>}
                </Container>


                {tipo == 'p' && status == 's' && (
                    <Container align="flex-start" justify="flex-start" padding={20} elevation={50} height={150} color="light">
                        <SubTilte>Olá, Luiz Fernando</SubTilte>
                        <Title>
                            Para onde você quer ir?
                        </Title>
                        <Space />
                        <Input placeholder="Procure um destino" />
                    </Container>
                )}



                <Container
                    padding={20}
                    zIndex={-1}
                >
                    {status == 'p' && tipo == 'p' &&
                        <PulseCircle
                            numPulses={3}
                            diameter={400}
                            speed={20}
                            duration={2000}
                        />
                    }
                </Container>

                {status == 'c' && tipo == 'p' &&

                    <Container border="primary" justify="flex-end" align="flex-start" elevation={50} height={150} color="light">
                        <Container row padding={10}>
                            <Container align="flex-start" padding={20} row>
                                <Avatar source={{
                                    uri: 'https://cdn.autopapo.com.br/box/uploads/2021/05/05102715/motorista-profissional-de-mascara-olhando-para-o-banco-de-tras.jpg'
                                }} small />
                                <Space width="10px" />
                                <Container align="flex-start">
                                    <SubTilte bold>Juliana righ</SubTilte>
                                    <SubTilte small>Bmw Preta ,Placa    </SubTilte>
                                </Container>
                            </Container>
                            <Vertical />
                            <Container width={100}>
                                <Title>
                                    R$ 10,90
                                </Title>
                                <SubTilte bold color="primary"> 5 mins</SubTilte>
                            </Container>
                        </Container>
                        <Button type="muted">
                            <ButtonText>
                                Cancelar Corrida
                            </ButtonText>
                        </Button>
                    </Container>

                }

                {tipo == 'p' && (status == 'i' || status == 'p') && (
                    <Container align="flex-end" justify="flex-start" elevation={50} height={150} color="light">
                        <Container padding={20}>
                            <SubTilte>DriveX convencional</SubTilte>
                            <Space />
                            <Container row>
                                <Container>
                                    <Title>R$ 12,90</Title>
                                </Container>
                                <Vertical />
                                <Container>
                                    <Title>5 mins</Title>
                                </Container>
                            </Container>
                        </Container>


                        <Button

                            type={status === 'p' ? 'muted' : 'primary'}
                        >
                            <ButtonText>
                                {status === 'p' ? 'Cancelar driveX' : 'Chamar DriveX'}
                            </ButtonText>
                        </Button>
                    </Container>
                )}

                {tipo == 'm' && status == 's' &&
                    <Container align="flex-start" justify="flex-start" padding={20} elevation={50} height={150} color="light">
                        <SubTilte>Olá, Juliana</SubTilte>
                        <Title>
                            Nenhuma  corrida encontrada.
                        </Title>
                    </Container>
                }


                {tipo == 'm' && status == 'c' &&

                    <Container border="primary" justify="flex-end" align="flex-start" elevation={50} height={150} color="light">
                        <Container row padding={10}>
                            <Container align="flex-start" padding={10} row>
                                <Avatar source={{
                                    uri: 'https://cdn.autopapo.com.br/box/uploads/2021/05/05102715/motorista-profissional-de-mascara-olhando-para-o-banco-de-tras.jpg'
                                }} small />
                                <Space width="10px" />
                                <Container align="flex-start">
                                    <SubTilte bold>Silvio (2km)</SubTilte>

                                    <Container justify="flex-start" row >
                                        <Bullet />
                                        <SubTilte numberOFLines={1} small>{' '}Endereço de embarque</SubTilte>
                                    </Container>
                                    <Container justify="flex-start" row >
                                        <Bullet destination />
                                        <SubTilte numberOFLines={1}  small>{' '}Endereço de destino</SubTilte>
                                    </Container>
                                </Container>
                            </Container>
                            <Vertical />
                            <Container width={100}>
                                <Title>
                                    R$ 100,90
                                </Title>
                                <SubTilte bold color="primary"> 5 mins</SubTilte>
                            </Container>
                        </Container>
                        <Button type="primary">
                            <ButtonText>
                                Aceitar corrida
                            </ButtonText>
                        </Button>
                    </Container>

                }
            </Container>
        </Container>


    )
}


export default Home