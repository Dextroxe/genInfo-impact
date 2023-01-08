/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { characters } from "../../json/data/characters";
import { builds } from '../../json/data/build'
import styles from '../../styles/char.module.css'

import Image from 'next/image';
import { Container, Row, Col, Text, Card, Popover, Button, Grid, Modal,useModal } from '@nextui-org/react';


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
  if (ctx == "same") {
    return ("#cad2c5")
  }
  if (ctx == "void") {
    return ("#264653")
  }
  else {
    return ("#588157")
  }

}

function createMarkup(c) {
  return { __html: c };
}

function printStar(paras) {
  let num = 30;
  if (paras === 5) {
    return (
      <>
        <Image
          width={num}
          height={num}
          src={`/images/star.png`}
          alt="Default Image"
          objectFit="cover"
        />
        <Image
          width={num}
          height={num}
          src={`/images/star.png`}
          alt="Default Image"
          objectFit="cover"
        />
        <Image
          width={num}
          height={num}
          src={`/images/star.png`}
          alt="Default Image"
          objectFit="cover"
        />
        <Image
          width={num}
          height={num}
          src={`/images/star.png`}
          alt="Default Image"
          objectFit="cover"
        />
        <Image
          width={num}
          height={num}
          src={`/images/star.png`}
          alt="Default Image"
          objectFit="cover"
        />
      </>
    )
  } if (paras === 4) {
    return (
      <>
        <Image
          width={num}
          height={num}
          src={`/images/star.png`}
          alt="Default Image"
          objectFit="cover"
        />
        <Image
          width={num}
          height={num}
          src={`/images/star.png`}
          alt="Default Image"
          objectFit="cover"
        />
        <Image
          width={num}
          height={num}
          src={`/images/star.png`}
          alt="Default Image"
          objectFit="cover"
        />
        <Image
          width={num}
          height={num}
          src={`/images/star.png`}
          alt="Default Image"
          objectFit="cover"
        />
      </>
    )
  }



}



const Post = () => {
  const router = useRouter()
  const { char } = router.query
  const character = characters[char]
  const build = builds[char]
  // const build = builds.xiao.roles["OFF-FIELD DPS"].artifacts





  try {
    if (!router.isReady) return; {

      const info = character
      // const builder = build
      const { setVisible, bindings } = useModal();
      return (
        <>

          {/* {charInfo(info)} */}
          <Container className={styles.contInfo} style={{ height: "69vh" }}>
            <div style={{ backgroundImage: `url(${`/images/img/${info.id}.png`})`, borderRadius: "20px" }} className={styles.charImg}>
              <div className={styles.infoCardElement}>

                {/* <hr className={styles.hr}></hr> */}
                {info.constellations.map((Element, index) => {

                  // {const elemental_power = {info.element.id}}
                  return (
                    <>
                      {/* placement="right-top" offset={0} */}
                      <Popover placement="right" offset={20}>
                        <Popover.Trigger >

                          {/* <Image src={`/images/skills/${info.name.replace(' ', '_')}/constellation_${index + 1}.png`} alt="me" width={60}
                            height={60} /> */}
                          <Button auto className={styles.hrs} css={{ color: `${elementss(info.element.id)}` }}>
                            <Image
                              width={60}
                              height={60}
                              src={`/images/skills/${info.name.replace(' ', '_')}/constellation_${index + 1}.png`}
                              alt="Default Image"
                              objectFit="cover"
                            /></Button>

                        </Popover.Trigger>
                        <Popover.Content className={styles.tooltipCard} css={{ color: `${elementss(info.element.id)}` }}>
                          <Text h5 dangerouslySetInnerHTML={createMarkup(Element.description.replace(/\\n/g, ' '))} color="white">
                          </Text>
                        </Popover.Content>
                      </Popover>



                    </>
                  )
                })}
              </div>
              <Modal noPadding blur className={styles.modalImg} width="70%"s
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              {...bindings}>
                <Modal.Header
                  css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                >
                  <Text color="white" size={25}>
                    Image from{" "}
                    {/* <Link
              color
              rel="noopener noreferrer"
              target="_blank"
              href="https://unsplash.com/@anniespratt"
            >
              Annie Spratt
            </Link>{" "}
            on{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://unsplash.com/s/visual/ef7937f3-0d44-43eb-b992-28050748f999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </Link> */}
                  </Text>
                </Modal.Header>
                <Card >
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={`/images/img/${info.id}.png`}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                      alt="background"

                    />
                  </Card.Body>
                </Card>
              </Modal>


              <Card
                isPressable
                isHoverable
                onClick={() => setVisible(true)}
                // variant="bordered"
                css={{ mw: "400px" }}>
                <Card.Header
                  css={{ position: "absolute", zIndex: 1, top: 5, justifyContent: "space-between" }} className={styles.cardBlur}>
                  <Image
                    src={`/images/elements/${info.element.id}.png`}
                    width={40}
                    height={40}
                    alt="Default Image"
                  // objectFit="cover"
                  />
                  <div>
                    {printStar(info.rarity)}
                  </div>

                </Card.Header>

                <Card.Image
                  src={`/images/img/${info.id}.png`}

                  objectFit="cover"
                  width="100%"
                  height="100%"
                  alt="Not Available"

                  style={{ objectPosition: "15% ", borderRadius: "20px" }}

                />

                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                  }}>
                  <Col>
                    <Text size={15} weight="bold" transform="uppercase" color="#ffffffAA">
                      {info.weapon.name} <Image src={`/images/skills/${info.name.replace(' ', '_')}/talent_1.png`} alt="me" width="30" height="30" />
                    </Text>
                    <Text h4 color="white">
                      {info.name.toUpperCase()}
                    </Text>
                  </Col>
                </Card.Footer>
              </Card>




              <div className={styles.info}>
                <Card className={styles.infoCard} css={{ color: `${elementss(info.element.id)}` }}>
                  <Card.Body className={styles.infoCardCtx}>
                    <Text h5 color="white">{info.description}</Text>
                  </Card.Body>
                </Card>

                <div className={styles.passiveCard} >

                  {info.passive.map((Element, index) => {

                    return (
                      <>

                        <Popover placement="bottom" offset={0}>
                          <Popover.Trigger >


                            <Button auto className={styles.passive_Card_Hrs} css={{ color: `${elementss(info.element.id)}` }}>
                              <Image
                                width={60}
                                height={60}
                                src={`/images/skills/${info.name.replace(' ', '_')}/talent_${index + 4}.png`}
                                alt="Default Image"
                                objectFit="cover"
                              /></Button>

                          </Popover.Trigger>
                          <Popover.Content className={styles.tooltipCard3} css={{ color: `${elementss(info.element.id)}` }}>
                            <Text h5 dangerouslySetInnerHTML={createMarkup(Element.description.replace(/\\n/g, ' '))} color="white">
                            </Text>
                          </Popover.Content>
                        </Popover>



                      </>
                    )
                  })}
                </div>

              </div>


            </div>

          </Container>
          <Container className={styles.contInfo} css={{ color: `${elementss(info.element.id)}` }}>


            <div className={styles.gird_Passive_Attack} >

              <Card className={styles.skillCard}

                isHoverable
                variant="bordered">
                <Card.Header>
                  <Image
                    width={34}
                    height={34}
                    src={`/images/skills/${info.name.replace(' ', '_')}/talent_2.png`}
                    alt="Default Image"
                    objectFit="cover"
                  />
                  <Grid.Container css={{ pl: "$3" }}>
                    <Grid xs={10}>
                      <Text h5 color="white" css={{ lineHeight: "$xs" }} >
                        {info.skill.name} (Skill)
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Divider color="white" />
                <Card.Body css={{ py: "$10" }}>
                  <Text h5 color="white" dangerouslySetInnerHTML={createMarkup(info.skill.description.replace(/\\n/g, ' '))}></Text>
                </Card.Body>
                <Card.Divider />
              </Card>

              {/* description about the char */}

              {/*  */}



              <Card className={styles.skillCard}

                isHoverable
                variant="bordered">
                <Card.Header>
                  <Image
                    width={34}
                    height={34}
                    src={`/images/skills/${info.name.replace(' ', '_')}/talent_3.png`}
                    alt="Default Image"
                    objectFit="cover"
                  />
                  <Grid.Container css={{ pl: "$3" }}>
                    <Grid xs={10}>
                      <Text h5 color="white" css={{ lineHeight: "$xs" }} >
                        {info.burst.name} (Burst)
                      </Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Divider color="white" />
                <Card.Body css={{ py: "$10" }}>
                  <Text h5 color="white" dangerouslySetInnerHTML={createMarkup(info.burst.description.replace(/\\n/g, ' '))}></Text>
                </Card.Body>
                <Card.Divider />
              </Card>

              {/* description about the char */}

              {/* <Text h5 color="white" dangerouslySetInnerHTML={createMarkup(info.burst.description.replace(/\\n/g, ' '))}></Text> */}


            </div>
          </Container>


        </>
      )

    }
  } catch (error) {
    return (

      <>
        <h1>Try Again</h1>
        {console.log(error)}
      </>
    )
  }


}
export default Post


