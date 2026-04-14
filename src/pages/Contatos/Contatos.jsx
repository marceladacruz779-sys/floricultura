import { useState } from 'react'
import styles from './Contatos.module.css'

export default function Contato() {

  // funcao pra mandar o alerta, e dps do manda limpar o formulario
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    alert('Enviado')

    setForm({
      nome: '',
      email: '',
      mensagem: ''
    })
  }

  return (
    <>
      <section className={styles.top}>
        <h1 className={styles.contato}>Contatos</h1>
      </section>

      <section className={styles.container}>
        <div className={styles.info}>
          <p>secretariacriativa@gmail.com</p>
          <p>(19) 99999-9999</p>
          <p>@instaqui</p>

          <span>Nos envie uma mensagem por aqui</span>
        </div>

        <div className={styles.formBox}>
          <form className={styles.form} onSubmit={handleSubmit}>
            
            <label>Nome</label>
            <input 
              type="text" 
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required 
            />

            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              required 
            />

            <label>Mensagem</label>
            <textarea 
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows="6" 
              required
            ></textarea>

            <button type="submit">Enviar</button>

          </form>
        </div>
      </section>    
    </>
  )
}
