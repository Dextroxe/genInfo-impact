import tcg from '../../json/data/tcg/en.json'
import styles from '../../styles/tcg.module.css'
import { Card, Text, Modal, Button, Grid, Row, Image } from '@nextui-org/react';
import Link from 'next/link';



function printCard(ctx) {
  return (
    <>
      <Link href={`/tcg/[tcgcard]?tcgcard=${ctx.type}`} as={`/tcg/${ctx.type}`}>


        <Card isPressable isHoverable className={styles.imgs} css={{ w: "100%", h: "400px" }}>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={`/images/tcg/${ctx.id}.png`} width="100%"
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

            <Text color="#231942" h3 weight="bold" > {ctx.type === "none"? "Helper": ctx.type}</Text>
          </Card.Footer>
        </Card>

      </Link>
    </>
  )
}


export default function profile() {



  return (
    <>
        <h1 className={styles.h1}>TCG Categories</h1>
      <div className={styles.tcgPage}>
        <div className={styles.container}>
          {/* <h1 className={styles.headers} id='character' >Characters</h1> */}
          {tcg.map((cards) => {
            if (cards.type === "character" && cards.id === "maguu_kenki") {
              return (
                <>
                  {printCard(cards)}
                  {/* {console.log(cards.name['Ganyu'])} */}
                </>
              )

            }
          })}


          {/* <h1 className={styles.headers} id='resonance' >Resonance</h1> */}
          {tcg.map((cards) => {
            if (cards.type === "resonance" && cards.id === "elemental_resonance_woven_thunder") {
              return (
                <>
                  {printCard(cards)}
                  {/* {console.log(cards.name['Ganyu'])} */}
                </>
              )

            }
          })}

          {/* <h1 className={styles.headers} id='talent' >Talent</h1> */}
          {tcg.map((cards) => {

            if (cards.type === "talent" && cards.id === "grand_expectation") {
              return (
                <>
                  {printCard(cards)}
                </>
              )
            }
          })}


          {/* <h1 className={styles.headers} id='weapon'>Weapon</h1> */}
          {tcg.map((cards) => {

            if (cards.type === "weapon" && cards.id === "skyward_atlas") {
              return (
                <>
                  {printCard(cards)}
                </>
              )
            }
          })}


          {/* <h1 className={styles.headers} id='artifact' >Artifact</h1> */}
          {tcg.map((cards) => {

            if (cards.type === "artifact" && cards.id === "crimson_witch_of_flames") {
              return (
                <>
                  {printCard(cards)}
                </>
              )
            }
          })}


          {tcg.map((cards) => {
          // <h1 className={styles.headers} id='place' >Place</h1>

            if (cards.type === "place" && cards.id === "jade_chamber") {
              return (
                <>
                  {printCard(cards)}
                </>
              )
            }
          })}


          {/* <h1 className={styles.headers} id='ally' >Ally</h1> */}
          {tcg.map((cards) => {

            if (cards.type === "ally" && cards.id === "paimon") {
              return (
                <>
                  {printCard(cards)}
                  
                </>
              )
            }
          })}


          {/* <h1 className={styles.headers} id='item' >Item</h1> */}
          {tcg.map((cards) => {

            if (cards.type === "item" && cards.id === "nre") {
              return (
                <>
                  {printCard(cards)}
                  
                </>
              )
            }
          })}

          
          {/* <h1 className={styles.headers} id='none' >none</h1> */}
          {tcg.map((cards) => {

            if (cards.type === "none" && cards.id === "strategize") {
              return (
                <>
                  {printCard(cards)}
                  
                </>
              )
            }
          })}

        </div>
        
      </div>

    </>
  );
}













//attack and desc
{/* <Card.Body>
                                  <Text dangerouslySetInnerHTML={createMarkup(skill.desc.replace(/\\n/g, ' '))}></Text>
                                  <Text dangerouslySetInnerHTML={createMarkup({} && !!(skill.sub) ? skill.sub.desc.replace(/\\n/g, ' ') : null)}></Text>
                                </Card.Body> */}