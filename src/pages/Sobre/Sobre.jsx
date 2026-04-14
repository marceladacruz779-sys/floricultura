import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <>
      <section className={styles.top}>
        <h1 className={styles.sobre}>Sobre</h1>
      </section>

      <section className={styles.content}>
        <p className={styles.intro}>
          Um boutique floral dedicada exclusivamente à majestade dos lírios.
          Acreditamos que cada flor carrega uma mensagem única de pureza e sofisticação.
          Cultivamos design contemporâneo com o frescor do campo, criando buquês
          exclusivos que transformam momentos comuns em experiências inesquecíveis.
        </p>

        <div className={styles.bloco}>
          <h2>Missão</h2>
          <p>
            Proporcionar experiências emocionais memoráveis através de buquês de
            lírios cuidadosamente selecionados, traduzindo sentimentos em formas
            naturais.
          </p>
        </div>

        <div className={styles.bloco}>
          <h2>Visão</h2>
          <p>
            Ser a marca referência nacional em floricultura especializada,
            reconhecida pela excelência no cultivo, inovação no design floral e
            pelo compromisso com a satisfação do cliente.
          </p>
        </div>

        <div className={styles.bloco}>
          <h2>Valores</h2>
          <p>
            Paixão pelo belo. Cuidado em cada detalhe. Integridade e transparência.
            Sustentabilidade e respeito à natureza. Encantamento em cada entrega.
          </p>
        </div>
      </section>
    </>
  )
}
