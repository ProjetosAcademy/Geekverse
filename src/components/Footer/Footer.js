import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer_container}>
        <p>Desenvolvido por <a href="" className='f-bold'> André Pinheiro</a> e <a href="" className='f-bold'> Ygor guilherme </a> </p>
        <span>&copy;2022</span>
    </div>
  )
}

export default Footer