import styles from '../../styles/Header.module.css'


export default function Header(){
  return(
    <header className={styles.menu}>
      <div className={styles.max}>
        <nav className={styles.menuItems}>
          <img src="" alt="" />
          <ul className={styles.Items}>
            <li><a href="">inicio</a></li>
            <li><a href="">Quem sou</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Habilidades</a></li>
          </ul>
        </nav>
      </div>

    </header>
  )
}