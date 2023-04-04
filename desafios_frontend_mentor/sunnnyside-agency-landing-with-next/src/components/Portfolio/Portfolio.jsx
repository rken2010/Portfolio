import React from 'react';
import Image from 'next/image'
import styles from './portfolio.module.css';


export default function Portfolio( ) {
  
  return (

  <section className={styles.portfolio__container}>     
    <div className={styles.portfolio__container__mobile}>
      <Image src="/img/mobile/image-gallery-milkbottles.jpg" alt="milkbottles" width="100%"/>
      <Image src="/img/mobile/image-gallery-orange.jpg" alt="orange" width="100%"/>
      <Image src="/img/mobile/image-gallery-cone.jpg" alt="cone" width="100%"/>
      <Image src="/img/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes" width="100%"/>
    </div>
    <div className={styles.portfolio__container__desktop}>
     <Image src="/img/desktop/image-gallery-milkbottles.jpg" alt="milkbottles" width="100%"/>
     <Image src="/img/desktop/image-gallery-orange.jpg" alt="orange" width="100%"/>
     <Image src="/img/desktop/image-gallery-cone.jpg" alt="cone" width="100%"/>
     <Image src="/img/desktop/image-gallery-sugarcubes.jpg" alt="sugar cubes" width="100%"/>
     </div>
  </section>

  )
}