//styles
import styles from './Header.module.css'


//fontawesome


//assets
import logo from '../../assets/images/logo.png'
//hooks
import {useState,useRef} from 'react'
const Header = () => {
  const [toggle,setToggle] = useState(true)

  const toggleMenu = () => {
    if(toggle){
      setToggle(false)
      return
    }
    setToggle(true)
  }

  return (
    <header className={styles.header_container} >
      
      <section className={styles.primary_header}>
        <div className={styles.toggle_icons_container} onClick={toggleMenu}>
          <i class="fa-solid fa-bars"></i>   
        </div>
          <div className={styles.primary_row1}>

            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>

            <div className={`${styles.search_container} ${styles.primary}` }>
              <form action="" className = {styles.search_container}>
                <label  className={styles.search_box}>
                  <input type="search" name="search" placeholder="o que procura hoje?" className={styles.search_input}/>
                  <button type="submit" className={styles.search_btn}><i className="fa-solid fa-magnifying-glass"></i></button>
                </label>
              </form>
            </div>

            <nav className={styles.user_nav}>
              <div>
                <i className="bi bi-cart"></i>
              </div>
              <div className={styles.auth_container}>
                  <li>Login</li>
                  <li>register</li>
              </div>
            </nav>
            
          </div>

            <div className={styles.primary_row2}>
              <nav className={styles.primary_nav}>
                  <ul className={styles.primary_menu}>
                    <div className ={styles.primary_menu_item}>
                      <i className={`${styles.primary_menu_icons} fa-brands fa-galactic-senate`}></i>
                      <li>temas</li>
                    </div>
                    <div className={styles.primary_menu_item}>
                      <i className={`${styles.primary_menu_icons} fa-solid fa-tree`}></i>
                      <li >decoração</li>
                    </div>
                    <div className={styles.primary_menu_item}>
                      <i className={`${styles.primary_menu_icons} fa-solid fa-mug-hot`}></i>
                      <li>canecas</li>
                    </div>
                   
                    <div className={styles.primary_menu_item}>
                      <i className={`${styles.primary_menu_icons} fa-solid fa-vest`}></i>
                      <li >vestuário</li>
                    </div>
                    <div className={styles.primary_menu_item}>
                      <i className={`${styles.primary_menu_icons} fa-solid fa-receipt`}></i>
                      <li>saldao</li>
                    </div>
                 
                    <div className={styles.primary_menu_item}>
                      <li >todos os produtos</li>
                    </div>
                  
                </ul>
              </nav>
            </div>
            
      </section>
   
     {toggle&&
       <div className={styles.toggle_exitBg} onClick={() => setToggle(false)}>
        {/*  */}
      </div>}
        <div 
          className={`${styles.toggle_container} ${toggle? styles.toggle_on: styles.toggle_off}`}>

          <div className={styles.toggle_search}>

            <div className={styles.close_btn} onClick={toggleMenu}>
              <i className="bi bi-x" style={{fontSize:'30px'}}></i>
            </div>
            <div className={styles.logo_box}>
                <img src={logo} alt="geekverse" />
              </div>

            <div className={styles.search_container}>
              <form action="">
                <label  className={styles.search_box}>
                  <input type="search" name="search" placeholder="o que procura hoje?" className={styles.search_input}/>
                  <button type="submit" className={styles.search_btn}><i className="fa-solid fa-magnifying-glass"></i></button>
                </label>
              </form>
            </div>
          </div>
{/* FALTA FAZER O BOTAO TOGGLE na max resolution  */}
          <nav className={styles.toggle_nav}>
            <ul className={styles.toggle_menu}>
              <div className ={styles.toggle_menu_item}>
                <i className={`${styles.toggle_menu_icons} fa-brands fa-galactic-senate`}></i>
                <li>temas</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <i className={`${styles.toggle_menu_icons} fa-solid fa-tree`}></i>
                <li >decoração</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <i className={`${styles.toggle_menu_icons} fa-solid fa-mug-hot`}></i>
                <li>canecas</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <i className={`${styles.toggle_menu_icons} fa-solid fa-kitchen-set`}></i>
                <li >cozinha</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <i className={`${styles.toggle_menu_icons} fa-solid fa-vest`}></i>
                <li >vestuário</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <i className={`${styles.toggle_menu_icons} fa-solid fa-receipt`}></i>
                <li>saldao</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <i className={`${styles.toggle_menu_icons} fa-solid fa-headphones`}></i>
                <li >acessórios</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <i className={`${styles.toggle_menu_icons} fa-solid fa-gamepad`}></i>
                <li>jogos</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <i class={`${styles.toggle_menu_icons} fa-solid fa-glasses`}></i>
                <li>combo geek</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <li >inverno geek</li>
              </div>
              <div className={styles.toggle_menu_item}>
                <li >todos os produtos</li>
              </div>
              
            </ul>
          </nav>
        </div>
    </header>
  )
}

export default Header