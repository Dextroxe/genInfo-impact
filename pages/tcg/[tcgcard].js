import { useRouter } from "next/router";
import tcg from '../../json/data/tcg/en.json'
import styles from '../../styles/tcgInfo.module.css'
import { Card, Text, Image, Row, Col, Avatar, Grid, Modal, useModal } from '@nextui-org/react';
import Link from "next/link";

function createMarkup(c) {
  return { __html: c };
}

function element(ctx) {
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



const cardsInfo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { tcgcard } = router.query;
  // console.log(elements)
  const heading = tcgcard
  return (
    <>





     <Text h1 color="white" css={{ textAlign: "center", p: "1rem" }}>{`${heading==="none" ? "Helper" : heading }'s`}</Text>
      <div className={styles.tcgPage}>

        <div className={styles.container}>
          {tcg.map((Element) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { setVisible, bindings } = useModal()

            if (Element.type === "character" && Element.type === tcgcard) {

              return (
                <>
                  <section className={styles.imgs}>
                    <Card isPressable isHoverable onClick={() => setVisible(true)} className={styles.imgs}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/images/tcg/${Element.id}.png`} width="100%"
                          height="100%"
                          objectFit="cover" />
                      </Card.Body>
                      <Card.Footer
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}>

                        <Text color="#231942" bold h3>{Element.name}</Text>
                      </Card.Footer>
                    </Card>
                  </section>



                  <Modal
                    className={styles.cardBox}
                    width="65%"
                    // scroll
                    // fullScreen

                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    css={{ pt: 0, pl: 10 }}
                    {...bindings}>

                    <Card css={{ backgroundColor: `${element(Element.element)}` }}>
                      <Card.Body>
                        <Text id="modal-description" css={{ p: 0 }}>
                          <section className={styles.modalGrid} >
                            <Card
                              // isPressable
                              isHoverable
                              className={styles.imgsModal}
                              variant="bordered">
                              <Card.Image
                                src={`/images/tcg/${Element.id}.png`}
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                alt="Card example background"

                              />

                            </Card>

                            <section className={styles.modalDesc} >
                              <Card className={styles.cardBox}>
                                {/* <Card.Header id="modal-title" className={styles.headers}>Requirement</Card.Header> */}
                                <Card.Body>
                                  <Avatar
                                    src={`/images/tcg/avatar/${Element.id}.png`}
                                    size="lg"
                                  />
                                </Card.Body>
                              </Card>
                              <div className={styles.modalGrid1}>
                                {Element.skills.map((skill, index) => {
                                  // console.log(elements.desc)
                                  return (
                                    <>


                                      <Card

                                        className={styles.cardBox}
                                        // isPressable
                                        isHoverable
                                        variant="bordered">
                                        <Card.Body>

                                          <Image src={`/images/tcg/skills/${Element.id.replace(' ', '_')}/skill_${index + 1}.png`} alt="me" width="10" height="10" />
                                          <Text h5 color="white" css={{ textAlign: "center", pb: "1rem" }}>{skill.name} ( {skill.type} )</Text>
                                          <Text h5 dangerouslySetInnerHTML={createMarkup(skill.desc.replace(/\\n/g, ' '))}></Text>
                                          <Text h5 dangerouslySetInnerHTML={createMarkup({} && !!(skill.sub) ? skill.sub.desc.replace(/\\n/g, ' ') : null)}></Text>

                                        </Card.Body>
                                      </Card>

                                    </>
                                  )

                                })}
                              </div>


                              {/* {work(Element)} */}
                            </section>



                          </section>

                        </Text>
                      </Card.Body>
                    </Card>

                  </Modal>



                </>
              );
            } else if (Element.type === "resonance" && Element.type === tcgcard) {
              return (
                <>
                  <section className={styles.imgs}>
                    <Card isPressable isHoverable onClick={() => setVisible(true)} className={styles.imgs}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/images/tcg/${Element.id}.png`} width="100%"
                          height="100%"
                          objectFit="cover" />
                      </Card.Body>
                      <Card.Footer
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}>

                        <Text color="#231942" bold h3>{Element.name}</Text>
                      </Card.Footer>
                    </Card>
                  </section>



                  <Modal
                    className={styles.cardBox}

                    width="50%"
                    scroll
                    // fullScreen
                    closeButton
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    css={{ pt: 0, pl: 10 }}
                    {...bindings}>
                    <Card css={{ backgroundColor: `${element(Element.requirement)}` }}>
                      <Card.Body>
                        <Text id="modal-description" css={{ p: 0 }}>
                          <section className={styles.modalGrid} >
                            <Card
                              // isPressable
                              isHoverable
                              className={styles.imgsModal}
                              variant="bordered">
                              <Card.Image
                                src={`/images/tcg/${Element.id}.png`}
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                alt="Card example background"
                              />

                            </Card>

                            <section className={styles.modalDesc} >
                              <Card className={styles.cardBox}>

                                <Card.Body>
                                  <Avatar
                                    src={`/images/tcg/icons/elements/${Element.requirement}.png`}
                                    size="lg"
                                  />
                                </Card.Body>
                              </Card>



                              <Card

                                className={styles.cardBox}
                                // isPressable
                                isHoverable
                                variant="bordered">
                                <Card.Body>

                                  <Text h5 dangerouslySetInnerHTML={createMarkup(Element.skills.desc.replace(/\\n/g, ' '))}></Text>


                                </Card.Body>
                              </Card>




                              {/* {work(Element)} */}
                            </section>



                          </section>

                        </Text>
                      </Card.Body>
                    </Card>

                  </Modal>
                </>
              )
            } else if (Element.type === "talent" && Element.type === tcgcard) {
              return (
                <>
                  <section className={styles.imgs}>
                    <Card isPressable isHoverable onClick={() => setVisible(true)} className={styles.imgs}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/images/tcg/${Element.id}.png`} width="100%"
                          height="100%"
                          objectFit="cover" />
                      </Card.Body>
                      <Card.Footer
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}>

                        <Text color="#231942" bold h3 >{Element.name}</Text>
                      </Card.Footer>
                    </Card>
                  </section>



                  <Modal
                    className={styles.cardBox}

                    width="50%"
                    scroll
                    // fullScreen
                    closeButton
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    css={{ pt: 0, pl: 10 }}
                    {...bindings}>

                    <Card css={{ backgroundColor: `${element(Element.skills.cost[0].type)}` }}>
                      <Card.Body>
                        <Text id="modal-description" css={{ p: 0 }}>
                          <section className={styles.modalGrid} >
                            <Card
                              // isPressable
                              isHoverable
                              className={styles.imgsModal}
                              variant="bordered">
                              <Card.Image
                                src={`/images/tcg/${Element.id}.png`}
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                alt="Card example background"
                              />

                            </Card >

                            <section className={styles.modalDesc} >
                              <Card className={styles.cardBox} isHoverable>

                                <Card.Body className={styles.cardBoxItem}>
                                  <Avatar
                                    src={`/images/tcg/avatar/${Element.requirement}.png`}
                                    size="xlg"
                                  />
                                  <Text h3>{Element.requirement.charAt(0).toUpperCase() + Element.requirement.replaceAll("_", " ").slice(1)}</Text>
                                </Card.Body>
                              </Card>



                              <Card

                                className={styles.cardBox}
                                // isPressable
                                isHoverable
                                variant="bordered">
                                <Card.Body>

                                  <Text h5 dangerouslySetInnerHTML={createMarkup(Element.skills.desc.replace(/\\n/g, ' '))}></Text>


                                </Card.Body>
                              </Card>




                              {/* {work(Element)} */}
                            </section>



                          </section>

                        </Text>
                      </Card.Body>
                    </Card>

                  </Modal>
                </>
              )
            } else if (Element.type === "weapon" && Element.type === tcgcard) {
              return (
                <>
                  <section className={styles.imgs}>
                    <Card isPressable isHoverable onClick={() => setVisible(true)} className={styles.imgs}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/images/tcg/${Element.id}.png`} width="100%"
                          height="100%"
                          objectFit="cover" />
                      </Card.Body>
                      <Card.Footer
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}>

                        <Text color="#231942" bold h3>{Element.name}</Text>
                      </Card.Footer>
                    </Card>
                  </section>



                  <Modal
                    className={styles.cardBox}

                    width="50%"
                    scroll
                    // fullScreen
                    closeButton
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    css={{ pt: 0, pl: 10 }}
                    {...bindings}>
                    <Card css={{ backgroundColor: `${element(Element.skills.cost[0].type)}` }}>
                      <Card.Body>
                        <Text id="modal-description" css={{ p: 0 }}>
                          <section className={styles.modalGrid} >
                            <Card
                              // isPressable
                              isHoverable
                              className={styles.imgsModal}
                              variant="bordered">
                              <Card.Image
                                src={`/images/tcg/${Element.id}.png`}
                                width="100%"
                                // height="100%"
                                objectFit="cover"
                                alt="Card example background"
                              />

                            </Card>

                            <section className={styles.modalDesc} >




                              <Card

                                className={styles.cardBox}
                                // isPressable
                                isHoverable
                                variant="bordered">
                                <Card.Body>

                                  <Text h5 dangerouslySetInnerHTML={createMarkup(Element.skills.desc.replace(/\\n/g, ' '))}></Text>


                                </Card.Body>
                              </Card>




                              {/* {work(Element)} */}
                            </section>



                          </section>

                        </Text>
                      </Card.Body>
                    </Card>

                  </Modal>
                </>
              )
            } else if (Element.type === "artifact" && Element.type === tcgcard) {
              return (
                <>
                  <section className={styles.imgs}>
                    <Card isPressable isHoverable onClick={() => setVisible(true)} className={styles.imgs}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/images/tcg/${Element.id}.png`} width="100%"
                          height="100%"
                          objectFit="cover" />
                      </Card.Body>
                      <Card.Footer
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}>

                        <Text color="#231942" bold h3>{Element.name}</Text>
                      </Card.Footer>
                    </Card>
                  </section>



                  <Modal
                    className={styles.cardBox}

                    width="50%"
                    scroll
                    // fullScreen
                    closeButton
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    css={{ pt: 0, pl: 10 }}
                    {...bindings}>
                    <Card css={{ backgroundColor: `${element(Element.skills.cost[0].type)}` }}>
                      <Card.Body>
                        <Text id="modal-description" css={{ p: 0 }}>
                          <section className={styles.modalGrid} >
                            <Card
                              // isPressable
                              isHoverable
                              className={styles.imgsModal}
                              variant="bordered">
                              <Card.Image
                                src={`/images/tcg/${Element.id}.png`}
                                width="100%"
                                // height="100%"
                                objectFit="cover"
                                alt="Card example background"
                              />

                            </Card>

                            <section className={styles.modalDesc} >




                              <Card

                                className={styles.cardBox}
                                // isPressable
                                isHoverable
                                variant="bordered">
                                <Card.Body>

                                  <Text h5 dangerouslySetInnerHTML={createMarkup(Element.skills.desc.replace(/\\n/g, ' '))}></Text>


                                </Card.Body>
                              </Card>




                              {/* {work(Element)} */}
                            </section>



                          </section>

                        </Text>
                      </Card.Body>
                    </Card>

                  </Modal>
                </>
              )
            } else if (Element.type === "place" && Element.type === tcgcard) {
              return (
                <>
                  <section className={styles.imgs}>
                    <Card isPressable isHoverable onClick={() => setVisible(true)} className={styles.imgs}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/images/tcg/${Element.id}.png`} width="100%"
                          height="100%"
                          objectFit="cover" />
                      </Card.Body>
                      <Card.Footer
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}>

                        <Text color="#231942" bold h3>{Element.name}</Text>
                      </Card.Footer>
                    </Card>
                  </section>



                  <Modal
                    className={styles.cardBox}

                    width="50%"
                    scroll
                    // fullScreen
                    closeButton
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    css={{ pt: 0, pl: 10 }}
                    {...bindings}>
                    <Card css={{ backgroundColor: `${element(Element.skills.cost[0].type)}` }}>
                      <Card.Body>
                        <Text id="modal-description" css={{ p: 0 }}>
                          <section className={styles.modalGrid} >
                            <Card
                              // isPressable
                              isHoverable
                              className={styles.imgsModal}
                              variant="bordered">
                              <Card.Image
                                src={`/images/tcg/${Element.id}.png`}
                                width="100%"
                                // height="100%"
                                objectFit="cover"
                                alt="Card example background"
                              />

                            </Card>

                            <section className={styles.modalDesc} >




                              <Card

                                className={styles.cardBox}
                                // isPressable
                                isHoverable
                                variant="bordered">
                                <Card.Body>

                                  <Text h5 dangerouslySetInnerHTML={createMarkup(Element.skills.desc.replace(/\\n/g, ' '))}></Text>


                                </Card.Body>
                              </Card>




                              {/* {work(Element)} */}
                            </section>



                          </section>

                        </Text>
                      </Card.Body>
                    </Card>

                  </Modal>
                </>
              )
            } else if (Element.type === "ally" && Element.type === tcgcard) {
              return (
                <>
                  <section className={styles.imgs}>
                    <Card isPressable isHoverable onClick={() => setVisible(true)} className={styles.imgs}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/images/tcg/${Element.id}.png`} width="100%"
                          height="100%"
                          objectFit="cover" />
                      </Card.Body>
                      <Card.Footer
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}>

                        <Text color="#231942" bold h3>{Element.name}</Text>
                      </Card.Footer>
                    </Card>
                  </section>



                  <Modal
                    className={styles.cardBox}

                    width="50%"
                    scroll
                    // fullScreen
                    closeButton
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    css={{ pt: 0, pl: 10 }}
                    {...bindings}>
                    <Card css={{ backgroundColor: `${element({} && !!Element.skills.cost[0] ? Element.skills.cost[0].type : {})}` }}>
                      <Card.Body>
                        <Text id="modal-description" css={{ p: 0 }}>
                          <section className={styles.modalGrid} >
                            <Card
                              // isPressable
                              isHoverable
                              className={styles.imgsModal}
                              variant="bordered">
                              <Card.Image
                                src={`/images/tcg/${Element.id}.png`}
                                width="100%"
                                // height="100%"
                                objectFit="cover"
                                alt="Card example background"
                              />

                            </Card>

                            <section className={styles.modalDesc} >




                              <Card

                                className={styles.cardBox}
                                // isPressable
                                isHoverable
                                variant="bordered">
                                <Card.Body>

                                  <Text h5 dangerouslySetInnerHTML={createMarkup(Element.skills.desc.replace(/\\n/g, ' '))}></Text>


                                </Card.Body>
                              </Card>




                              {/* {work(Element)} */}
                            </section>



                          </section>

                        </Text>
                      </Card.Body>
                    </Card>

                  </Modal>
                </>
              )
            } else if (Element.type === "item" && Element.type === tcgcard) {
              return (
                <>
                  <section className={styles.imgs}>
                    <Card isPressable isHoverable onClick={() => setVisible(true)} className={styles.imgs}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/images/tcg/${Element.id}.png`} width="100%"
                          height="100%"
                          objectFit="cover" />
                      </Card.Body>
                      <Card.Footer
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}>

                        <Text color="#231942" bold h3>{Element.name}</Text>
                      </Card.Footer>
                    </Card>
                  </section>



                  <Modal
                    className={styles.cardBox}

                    width="50%"
                    scroll
                    // fullScreen
                    closeButton
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    css={{ pt: 0, pl: 10 }}
                    {...bindings}>
                    <Card css={{ backgroundColor: `${element(Element.skills.cost[0].type)}` }}>
                      <Card.Body>
                        <Text id="modal-description" css={{ p: 0 }}>
                          <section className={styles.modalGrid} >
                            <Card
                              // isPressable
                              isHoverable
                              className={styles.imgsModal}
                              variant="bordered">

                              <Card.Image
                                src={`/images/tcg/${Element.id}.png`}
                                width="100%"
                                // height="100%"
                                objectFit="cover"
                                alt="Card example background"
                              />

                            </Card>

                            <section className={styles.modalDesc} >




                              <Card

                                className={styles.cardBox}
                                // isPressable
                                isHoverable
                                variant="bordered">
                                <Card.Body>

                                  <Text h5 dangerouslySetInnerHTML={createMarkup(Element.skills.desc.replace(/\\n/g, ' '))}></Text>


                                </Card.Body>
                              </Card>




                              {/* {work(Element)} */}
                            </section>



                          </section>

                        </Text>
                      </Card.Body>
                    </Card>

                  </Modal>
                </>
              )
            } else if (Element.type === "none" && Element.type === tcgcard) {
              return (
                <>
                  <section className={styles.imgs}>
                    <Card isPressable isHoverable onClick={() => setVisible(true)} className={styles.imgs}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/images/tcg/${Element.id}.png`} width="100%"
                          height="100%"
                          objectFit="cover" />
                      </Card.Body>
                      <Card.Footer
                        css={{
                          position: "absolute",
                          bgBlur: "#ffffff66",
                          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                          bottom: 0,
                          zIndex: 1,
                        }}>

                        <Text color="#231942" bold h3>{Element.name}</Text>
                      </Card.Footer>
                    </Card>
                  </section>



                  <Modal
                    className={styles.cardBox}

                    width="50%"
                    scroll
                    // fullScreen
                    closeButton
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    css={{ pt: 0, pl: 10 }}
                    {...bindings}>
                    <Card css={{ backgroundColor: `${element(Element.element)}` }}>
                      <Card.Body>
                        <Text id="modal-description" css={{ p: 0 }}>
                          <section className={styles.modalGrid} >
                            <Card
                              // isPressable
                              isHoverable
                              className={styles.imgsModal}
                              variant="bordered">
                              <Card.Image
                                src={`/images/tcg/${Element.id}.png`}
                                width="100%"
                                height="100%"
                                objectFit="cover"
                                alt="Card example background"
                                className={styles.modalImg}
                              />
                            </Card>

                            <section className={styles.modalDesc} >




                              <Card

                                className={styles.cardBox}
                                // isPressable
                                isHoverable
                                variant="bordered">
                                <Card.Body>

                                  <Text h5 dangerouslySetInnerHTML={createMarkup(Element.skills.desc.replace(/\\n/g, ' '))}></Text>


                                </Card.Body>
                              </Card>




                              {/* {work(Element)} */}
                            </section>



                          </section>

                        </Text>
                      </Card.Body>
                    </Card>

                  </Modal>
                </>
              )
            }

          })}
        </div>


      </div>
    </>
  )


}

export default cardsInfo;