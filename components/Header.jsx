import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { AiFillCaretDown } from "react-icons/ai"


export default function Header() {

  const [userLogged, setUserLogged] = useState(null)

  useEffect(()=>{
    if(localStorage.getItem('user')){
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

              <a
                className="color-white font1em margin-right25 planes"
                href="/pricing"
              >
                Precios
              </a>
              <a className="color-white font1em margin-right25" href="/blog">
                Blog
              </a>
              {
                !userLogged && <Link href="/login">
                  <a className="my-btn back-green text-uppercase color-green contactanos">
                    <span className="font1em color-white">Iniciar Sesión</span>
                  </a>
                </Link>
              }

              {
                userLogged && <div>
                  <div className="my-btn color-green flex flex-center flex-middle">
                    <p className="color-green font1em">{userLogged.name}</p>
                    
                    <p className="relative font20" style={{top:2+'px', right:-2+'px'}}><AiFillCaretDown /></p>
                  </div>
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
