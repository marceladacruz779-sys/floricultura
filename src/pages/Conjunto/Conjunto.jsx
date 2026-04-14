import styles from './Conjunto.module.css'

export default function Conjunto() {
  return (
    <>
      <section className={styles.top}>
        <h1 className={styles.conjunto}>Conjunto</h1>
      </section>

      <section className={styles.container}>
        <div className={styles.grid}>

          <div className={styles.card}>
            <h2>Lírios e Rosas</h2>
            <img src="/img/buque8.jpg" alt="" />
          </div>

          <div className={styles.card}>
            <h2>Lírios e Lisianthus</h2>
            <img src="/img/buque9.jpg" alt="" />
          </div>

          <div className={styles.card}>
            <h2>Lírios e Gipsofilas</h2>
            <img src="/img/buque10.jpg" alt="" />
          </div>

          <div className={styles.card}>
            <h2>Lírios e Astromélias</h2>
            <img src="/img/buque11.jpg" alt="" />
          </div>

        </div>
      </section>
    </>
  )
}
