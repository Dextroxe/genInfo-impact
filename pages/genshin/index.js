import styles from '../../styles/allchar.module.css'
import { Card, Text, Image, Row, Col, Avatar, Grid, Modal, useModal, Button } from '@nextui-org/react';
// import genshinChar from '../../json/data.json';
import Link from 'next/link';
import { characters } from '../../json/data/characters'
import { useState } from 'react';


function elementss(ctx) {
    // const elements = [{ pyro: "#BF3636", hydro: "#599ec4", cryo: "#b9dfe4", dendro: "#4fef67", anemo: "#54dcb4", geo: "#e8c660", Electro: "#ae62c7" }]
    if (ctx == "pyro") {
        return ("#BF3636")
    }
    if (ctx == "hydro") {
        return ("#599ec4")
    }
    if (ctx == "cryo") {
        return ("#b9dfe4")
    }
    if (ctx == "dendro") {
        return ("#608a00 ")
    }
    if (ctx == "anemo") {
        return ("#54dcb4")
    }
    if (ctx == "geo") {
        return ("#e8c660")
    }
    if (ctx == "electro") {
        return ("#bf00ff")
    }

}




function charBox(ctx, region, element) {
    
    return (
        <>
            <div>
                <div className={styles.headingOnlyImg}>
                    {/* <h1 className={styles.headingImg}>{element}</h1> */}
                </div>
                <div  style={{backgroundColor:`${elementss(element)}`}} className={styles.elemenCharBox} >
                    {Object.values(ctx).map(ele => {
                        const rare = ele.rarity
                        const background = rare === 5 ? "#dca454" : "#9174a9";
                        if (ele.region.id === `${region}`) {
                            if (ele.element.id === `${element}`) {
                                return (
                                    <>

                                        {printchar(ele, background)}
                                    </>
                                )

                            }
                        }

                    })}
                </div>
            </div>
        </>
    )
}


function printchar(ctx, background) {
    return (
        <>
            <Link href={`/genshin/${ctx.id}`}>
                <Card css={{ width: "10rem", height: "22rem" }} isHoverable>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }} className={styles.HeaderImg}>
                        <Image
                            src={`/images/elements/${ctx.element.id}.png`}
                            width={40}
                            height={40}
                            alt="Default Image"

                        // objectFit="cover"
                        />
                    </Card.Header>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={`/images/characters/full/${ctx.id}.png`}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            alt="Card example background"
                            style={{ backgroundColor: `${background}`, }}
                        />
                    </Card.Body>
                    <Card.Footer
                        isBlurred
                        css={{
                            position: "absolute",
                            bgBlur: "#ffffff66",
                            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                            bottom: 0,
                            zIndex: 1,
                        }}
                    >
                        <Row>
                            <Col>
                                <Text color="#000" h4>
                                    {ctx.name}
                                </Text>
                            </Col>

                        </Row>
                    </Card.Footer>
                </Card>
            </Link>
        </>
    )
}


function printCharBox(ctx, region, backgrounds) {
    const elemental = ["anemo", "cryo", "dendro", "electro", "geo", "hydro", "pyro"]
    return (
        <>
            <div className={styles.charactersBox} style={{ backgroundImage: `url(${backgrounds})`, borderRadius: "20px", objectFit: "cover" }}>
                <div className={styles.headingOnly}>
                    <h1 className={styles.heading}>{region.toUpperCase()}</h1>
                </div>

                <section className={styles.elementBox}>
                    {elemental.map((element) => {
                        return (
                            <>
                                {charBox(ctx, region, `${element}`)}
                            </>
                        )
                    })}

                </section>
            </div>
        </>
    )
}


function BodyOnlyExample() {
    const info = characters;
    const mondstadtBg = `/images/backgrounds/background.jpg`;
    const sumeruBg = `/images/backgrounds/Sumeru.png`;
    const inazumaBg = `/images/backgrounds/Inazuma.png`;
    const liyueBg = `/images/backgrounds/liyue.jpg`;



    const [chars, SetChars] = useState(() => {
        return (
            <>
                {printCharBox(info, `mondstadt`, mondstadtBg)}
            </>
        )
    })

    function mondstadtChars() {
        SetChars(printCharBox(info, `mondstadt`, mondstadtBg))
    }

    function sumeruChars() {
        SetChars(printCharBox(info, `sumeru`, sumeruBg))
    }

    function inazumaChars() {
        SetChars(printCharBox(info, `inazuma`, inazumaBg))
    }
    function liyueChars() {
        SetChars(printCharBox(info, `liyue`, liyueBg))
    }

    // function regionName(region , regionBg) {
    //     SetChars(printCharBox(info,region,regionBg))
    // }


    return (
        <>


            <div className={styles.containBox} onClick={mondstadtChars}>


                <Button css={{ backgroundImage: `url(${mondstadtBg})`, color: "Blue" }} className={styles.mondstadtBtns} onClick={mondstadtChars}>Mondstadt</Button>
                <Button css={{ backgroundImage: `url(${sumeruBg})` }} className={styles.sumeruBtns} onClick={sumeruChars}>Sumeru</Button>
                <Button css={{ backgroundImage: `url(${inazumaBg})` }} className={styles.inazumaBtns} onClick={inazumaChars}>Inazuma</Button>
                <Button css={{ backgroundImage: `url(${liyueBg})` }} className={styles.liyueBtns} onClick={liyueChars}>Liyue</Button>
                {/* </div> */}
            </div>
            <div className={styles.containBox}>
                {chars}
            </div>
        </>
    );
}

export default BodyOnlyExample;

