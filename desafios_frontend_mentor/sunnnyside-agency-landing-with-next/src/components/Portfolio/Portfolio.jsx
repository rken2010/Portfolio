import React from 'react';
import Image from 'next/image'
import styles from './porfolio.module.css';


export default function Portfolio( ) {
  
  return (

  <section className={styles.portfolio__container}>     
    <div className={styles.portfolio__container__mobile}>
      <Image src="/img/mobile/image-gallery-milkbottles.jpg" alt="milkbottles"/>
      <Image src="/img/mobile/image-gallery-orange.jpg" alt="orange"/>
      <Image src="/img/mobile/image-gallery-cone.jpg" alt="cone"/>
      <Image src="/img/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes"/>
    </div>
    <div className={styles.portfolio__container__desktop}>
     <Image src="/img/desktop/image-gallery-milkbottles.jpg" alt="milkbottles"/>
     <Image src="/img/desktop/image-gallery-orange.jpg" alt="orange"/>
     <Image src="/img/desktop/image-gallery-cone.jpg" alt="cone"/>
     <Image src="/img/desktop/image-gallery-sugarcubes.jpg" alt="sugar cubes"/>
     </div>
  </section>

  )
}