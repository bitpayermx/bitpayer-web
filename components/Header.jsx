import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { AiFillCaretDown } from "react-icons/ai"
import { MenuNav } from './ui/MenuNav'


export default function Header() {

  const [userLogged, setUserLogged] = useState(null)
  const [showMenu, setShowMenu] = useState(false)


  //  Inspired by Seven

//  http://dribbble.com/shots/1338859-Dribbble-Menu

// Twitter @YoannHELIN

  const handleToggleMenu = ()=>{

      setShowMenu(!showMenu)
   
  }

  const handleMouseOut = ()=>{
    setShowMenu(false)
  }
    


  useEffect(()=>{
    const localUser = localStorage.getItem('user')
    if(JSON.parse(localUser)){
      setUserLogged(JSON.parse(localStorage.getItem('user')))
    }
  }, [])

  return (
    <>
      <header
        className="my-header flex flex-middle flex-between transition30 relative back-darkblue"
        id="header"
      >
        <section className="my-container padding5 flex flex-middle flex-between width100">
          <div className="relative">
            <Link href="/">
              <a>
                <p className="margin-left20 flex-middle flex padding10-0 font2em">
                  <Image
                    src="/bitpayer-logo-green.png"
                    width={35}
                    height={42}
                  />
                  <span className="margin-left5 color-white relative">
                    BITPAYER
                  </span>
                </p>
              </a>
            </Link>
          </div>
          <section className="flex flex-middle">
            <div className="margin-right30 relative flex-desktop flex-middle hide">
              <a
                className="color-white font1em margin-right25 servicios"
                href="/servicios"
              >
                Servicios
              </a>
              <Link href="/educacion">
                <a
                  className="color-white font1em margin-right25"
                  href="/educacion"
                >
                  Educaci&oacute;n
                </a>
              </Link>

              <Link href="/educacion">
                <a
                  className="color-white font1em margin-right25"
                  href="/educacion"
                >
                  Asesorías
                </a>
              </Link>

              <Link href="/crear-pago">
              <a
                className="color-white font1em margin-right25 planes"
                
              >
                Recibir Bitcoin
              </a>
              </Link>

              {/* {
                userLogged && <Link href="/mis-pagos">
              <a
                className="color-white font1em margin-right25 planes"
                
              >
                Mis Pagos
              </a>
              </Link>} */}
              
              
              {/* <a className="color-white font1em margin-right25" href="/blog">
                Blog
              </a> */}
              {
                !userLogged && <Link href="/login">
                  <a className="my-btn back-green color-green text-uppercase">
                    <span className="color-white">Iniciar Sesión</span>
                  </a>
                </Link>
              }

              {
                userLogged && <div className="relative">
                  <div onClick={handleToggleMenu} className="my-btn color-green flex flex-center flex-middle">
                    <p className="color-green font1em">{userLogged.name}</p>
                    
                    <p className="relative font20" style={{top:2+'px', right:-2+'px'}}><AiFillCaretDown /></p>
                  </div>

                  {
                    showMenu && <MenuNav>
                      <div className="menu-profile">
                        <ul className="menu-profile-list">
                          {/* <Link href="/crear-pago"><li className="menu-profile-list-item"><a className=" margin-right25">Crear Pago</a></li></Link> */}
                          <Link href="/mis-pagos"><li className="menu-profile-list-item"><a className=" margin-right25">Pagos creados</a></li></Link>
                          <li className="menu-profile-list-item">Perfil</li>
                          <li className="menu-profile-list-item">Configuración</li>
                          <li className="menu-profile-list-item">Salir</li>
                        </ul>
                      </div>
                    </MenuNav>
                  }
                </div>
              }

              
              
            </div>
            <div className="padding15 pointer flex hide-desktop">
              <p className="color-white relative" id="menu-btn">
                <i className="ion-navicon-round" aria-hidden="true"></i>
              </p>
              <p className="hide color-white relative" id="close-btn">
                <i className="ion-close-round" aria-hidden="true"></i>
              </p>
            </div>
          </section>
        </section>
      </header>
    </>
  );
}
