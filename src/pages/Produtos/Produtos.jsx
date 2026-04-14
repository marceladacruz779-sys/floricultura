import styles from './Produtos.module.css'

export default function Produtos() {
  return (
    <>
      <section className={styles.top}>
        <h1 className={styles.produtosH}>Produtos</h1>
      </section>

      <section className={styles.produtos}>
        <div className={styles.grid}>

          <div className={styles.item}>
            <h2>Buquê lírios rosa com mosquitinho branco</h2>
            <img src="/img/buque4.jpg" alt="" />
            <p>Perfeito para ocasiões especiais e demonstrações de carinho.</p>
            <span>PEÇA MEDIANTE ENTREGA</span>
          </div>

          <div className={styles.item}>
            <h2>Buquê lírios rosa com mosquitinho branco</h2>
            <img src="/img/buque5.PNG" alt="" />
            <p>Elegante e delicado, ideal para presentes sofisticados.</p>
            <span>PEÇA MEDIANTE ENTREGA</span>
          </div>

          <div className={styles.item}>
            <h2>Buquê lírios rosa com mosquitinho branco</h2>
            <img src="/img/buque6.jpg" alt="" />
            <p>Uma opção vibrante para momentos especiais.</p>
            <span>PEÇA MEDIANTE ENTREGA</span>
          </div>

          <div className={styles.item}>
            <h2>Buquê lírios rosa com mosquitinho branco</h2>
            <img src="/img/buque7.jpg" alt="" />
            <p>Cheio de vida e cor para alegrar qualquer dia.</p>
            <span>PEÇA MEDIANTE ENTREGA</span>
          </div>

        </div>
      </section>
    </>
  )
}
