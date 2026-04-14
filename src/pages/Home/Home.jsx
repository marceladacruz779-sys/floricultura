import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.top}>
        <h1 className={styles.flores}>flores</h1>
      </section>

      <section className={styles.centro}>
        <div className={styles.centroContainer}>
          
          <div className={styles.texto}>
            <h1 className={styles.lirios}>Lírios</h1>
            <p className={styles.liriosP}>
              Os lírios são algumas das flores mais icônicas e apreciadas no mundo, pertencentes ao gênero Lilium. Eles combinam uma elegância clássica com um perfume marcante, sendo protagonistas em jardins e arranjos florais há milênios.
            </p>
          </div>

          <img 
            src="/img/florhome2.png" 
            alt="Lírio" 
            className={styles.imgLirio}
          />

        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.card}>
          <h2>Afeto</h2>
          <img src="/img/buque1.jpg" alt="" />
        </div>

        <div className={styles.card}>
          <h2>Gesto</h2>
          <img src="/img/buque2.jpg" alt="" />
        </div>

        <div className={styles.card}>
          <h2>Amor</h2>
          <img src="/img/buque3.jpg" alt="" />
        </div>
      </section>
    </>
  )
}
