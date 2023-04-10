
import styles from "./testimonials.module.css"

function Testimonials( {testimonials} ) {

  return (
    <section className={styles.testimonials}>
      <h3 className={styles.testimonials__title} >Client Testimonials</h3>
      <div className={styles.testimonials__container}>
        {

        testimonials.map ((testimonials)=> 
        <div className={styles.testimonials__card} key={testimonials?.name}>
            <div className={styles.testimonials__card__avatar} >
                <img src={testimonials?.avatar} alt={testimonials?.name} />
            </div>
            <div className={styles.testimonials__card__text}>
                <p>{testimonials?.text}</p>
                <div className={styles.testimonials__card__text__footer}>
                    <p>{testimonials?.name}</p>
                    <span>{testimonials?.job}</span>
                </div>
            </div>

        </div>
        )
        
        }

      </div>
    </section>
  )
}

export default Testimonials