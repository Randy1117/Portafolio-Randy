import {React} from 'react'
import style from './nav.module.css'
import { Link } from "react-scroll";

export function Nav() {

  const widthSize = window.innerWidth
  console.log(widthSize)
    return(
        <div className={style.container}>

        <div className={style.nav}>
        
          <div>
          <span className={style.block}><Link to="info" smooth={true}>Sobre mi</Link></span>
          </div>
          <div>
          <span className={style.block}><Link to="proyectos" smooth={true}>Proyectos</Link></span>
          </div>
         
          <div>
          <span className={style.block}><Link to="contacto" smooth={true}>Contacto</Link></span>
          </div>
          </div>

        </div>
    )
}