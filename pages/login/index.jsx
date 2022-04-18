import React from "react";
// import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/Header";

import { AiOutlineTwitter, AiFillGoogleCircle } from "react-icons/ai";

import { GrBitcoin } from "react-icons/gr";

import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Bitpayer - Login.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,200;0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&family=Vollkorn&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <section
        className="flex flex-center flex-middle "
        style={{ height: "100vh" }}
      >
        {/* {this.state.spin && <Spinner />} */}

        <article className="back-white login-box" style={{ width: "390px" }}>
          <div className="back-white width100 padding20-0">
            <p className="font1-5em text-center margin-bottom15">
              Inicia sesión:
            </p>

            <section className="flex flex-center">
              <div className="back-facebook pointer rounded font1em square50 flex flex-center flex-middle">
                <a href="/api/facebook">
                  <FaFacebookF className=" font1em color-white" />
                </a>
              </div>
              <div className="back-blue pointer rounded font1em square50 margin0-20 flex flex-center flex-middle">
                <a href="/api/twitter">
                  <AiOutlineTwitter className=" font1-5em  color-white" />
                </a>
              </div>

              <div className="back-gplus pointer rounded font1em square50 flex flex-center flex-middle">
                <a href="/api/google">
                  <AiFillGoogleCircle className=" font1-5em color-white" />
                </a>
                
              </div>
            </section>
            <section className="padding10-20" style={{ paddingBottom: "0px" }}>
              <div className="flex flex-middle width100">
                <p className="width100 back-gray" style={{ height: "1px" }}></p>
                {/* <p className="font1-3em font-bold margin0-10 relative" style={{top: "-3px"}}>ó</p> */}
                <p
                  className="color-yellow margin0-10 relative"
                  style={{ top: "2px" }}
                >
                  <GrBitcoin className="font1-5em "/>
                </p>
                <p className="width100 back-gray" style={{ height: "1px" }}></p>
              </div>
            </section>

            <section
              className="padding30"
              style={{ paddingBottom: "10px", "padding-top": "15px" }}
            >
              <div className="flex margin-bottom20">
                <input type="email" placeholder="Correo" className="my-input" />
              </div>

              <div className="flex margin-bottom20">
                <input
                  type="password"
                  placeholder="Contraseña"
                  name=""
                  className="my-input"
                />
              </div>
              <div className="flex width100 margin-bottom15">
                <button class="my-btn back-darkblue-gradient color-darkblue text-uppercase block width100">
                  <span class="font1em color-white">Ingresar</span>
                </button>
                
              </div>

              <div className="flex flex-center margin-bottom10">
                <Link href="recuperar-contrasena" className="width100">
                  <p className="color-blue pointer font1em anchor text-center">
                    ¿Olvidaste tu contraseña?
                  </p>
                </Link>
              </div>

              <br />
              <div className="flex flex-center margin-bottom15">
                <p className="color-black pointer font1em text-center">
                  ¿Aún no tienes cuenta en Bitpayer?
                </p>
              </div>

              <div className="flex width100">
                <Link href="/registro">
                  <a className="my-btn back-green color-green block text-uppercase width100">
                    <span className="color-white font1em">Regístrate ahora</span>
                  </a>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Login;
