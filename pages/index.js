import styles from '../styles/main.module.css'
import { Card, Row, Col, Grid, Text, Avatar } from '@nextui-org/react';
import Link from 'next/link';
import Router from 'next/router';
// import prevent

const index = () => {
    const ClickTcg = () => {
        Router.push('/tcg');
    };

    const ClickChar = () => {
        Router.push('/genshin');
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.infoCards}>
                    <section onClick={ClickChar}>
                        <Card css={{ p: "$6", mw: "80%" }} className={styles.cards}
                            isPressable
                            isHoverable
                            variant="bordered">
                            <Card.Header>
                                <Avatar
                                    size="lg"
                                    src={`/images/characters/paimon.png`}
                                    zoomed
                                />
                                <Grid.Container css={{ pl: "$6" }}>
                                    <Grid xs={12}>
                                        <Text h4 css={{ lineHeight: "$xs" }}>
                                            Characters
                                        </Text>
                                    </Grid>
                                    <Grid xs={12}>
                                    <Link
                                    icon
                                    color="primary"
                                    target="_blank"
                                    href="https://twitter.com/genshinimpact"
                                >
                                    @GenshinImpact from Twitter!
                                </Link>
                                    </Grid>
                                </Grid.Container>
                            </Card.Header>
                            <Card.Body css={{ py: "$2" }}>
                                <Text>
                                    All characters are archived here enjoy your stay
                                </Text>
                            </Card.Body>
                            <Card.Footer>
                            <Text
                                    icon
                                    color="primary"
                                    target="_blank"
                                    href=''
                                    onClick={() => {ClickChar()}}
                                >
                                    {'Visit >'}
                                </Text>
                            </Card.Footer>
                        </Card>
                    </section>
                    <section onClick={ClickTcg}>
                        
                        <Card css={{ p: "$6", mw: "80%" }} className={styles.cards}
                            isPressable
                            isHoverable
                            variant="bordered"
                        >
                            <Card.Header>
                            <Avatar
                                    size="lg"
                                    src={`/images/tcg/avatar/maguu_kenki.png`}
                                    zoomed
                                />
                                <Grid.Container css={{ pl: "$6" }}>
                                    <Grid xs={12}>
                                        <Text h4 css={{ lineHeight: "$xs" }}>
                                            TCG
                                        </Text>
                                    </Grid>
                                    <Grid xs={12}>
                                    <Link
                                    icon
                                    color="primary"
                                    target="_blank"
                                    href="https://discord.gg/genshinimpact"
                                >
                                    @Genshin Impact Official Discord
                                </Link>
                                    </Grid>
                                </Grid.Container>
                            </Card.Header>
                            <Card.Body css={{ py: "$2" }}>
                                <Text>
                                TCG Cards are archived here.
                                </Text>
                            </Card.Body>
                            <Card.Footer>
                                <Text
                                    icon
                                    color="primary"
                                    target="_blank"
                                    href=''
                                    onClick={() => {ClickTcg()}}
                                >
                                    {'Visit >'}
                                </Text>
                            </Card.Footer>
                        </Card>   
                    </section>
                </div>
            </div>
        </>
    );
}

export default index;