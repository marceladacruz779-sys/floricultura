import styles from './Header.module.css'

export default function Header() {
  return (
    <nav className={styles.nav}>
      <a href="/">Home</a>
      <a href="/sobre">Sobre</a>
      <a href="/produtos">Produtos</a>
      <a href="/contato">Contato</a>
      <a href="/conjunto">Conjunto</a>
    </nav>
  )
}
