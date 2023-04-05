import React from 'react';
import Image from 'next/image'
import styles from './portfolio.module.css';

import milkbottlesMobile from "../../../public/img/mobile/image-gallery-milkbottles.jpg"
import orangeMobile from "../../../public/img/mobile/image-gallery-orange.jpg"
import coneMobile from "public/img/mobile/image-gallery-cone.jpg"
import sugarMobile from "../../../public/img/mobile/image-gallery-sugar-cubes.jpg"

import milkbottlesDesktop from "../../../public/img/desktop/image-gallery-milkbottles.jpg"
import orangeDesktop from "../../../public/img/desktop/image-gallery-orange.jpg"
import coneDesktop from "public/img/desktop/image-gallery-cone.jpg"
import sugarDesktop from "../../../public/img/desktop/image-gallery-sugarcubes.jpg"




export default function Portfolio( ) {
  
  return (

  <section className={styles.portfolio__container}>     
    <div className={styles.portfolio__container__mobile}>
      <Image src={milkbottlesMobile} alt="milkbottles"/>
      <Image src={orangeMobile} alt="orange"/>
      <Image src={coneMobile} alt="cone"/>
      <Image src={sugarMobile} alt="sugar"/>
     </div>
     <div className={styles.portfolio__container__desktop}>
      <Image src={milkbottlesDesktop} alt="milkbottles"/>
      <Image src={orangeDesktop} alt="orange"/>
      <Image src={coneDesktop} alt="cone"/>
      <Image src={sugarDesktop} alt="sugar"/>
     </div>
  </section>

  )
}