import styles from '../../styles/Content.module.css'


export default function Content(){
  return(
    <div className={styles.position}>
      <div className={styles.center}>
        <div>
        <p className={styles.text}>
        <span className={styles.blue}>D</span>esign e tecnologia combinados para tornar suas ideias em <span className={styles.blue}>realidade</span>.        
        </p>
        <button className={styles.contato}>Contato</button>
        </div>

      </div>

    </div>
  )
}