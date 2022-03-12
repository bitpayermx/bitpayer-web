import { getCookie, removeCookies } from "cookies-next";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { useRouter } from "next/router";
import { dbConnect } from "../mongodb/dbConnect";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function Dashboard({ name, email, objUser }) {
  const router = useRouter();

  const logout = () => {
    removeCookies("token");
    router.replace("/");
  };

  useEffect(()=>{
    localStorage.user = objUser
    console.log('holaa' + new Date())
  },['objUser'])

  return (
    <div>
      <Head>
          <title>Bitpayer - Bitcoin hecho fácil.</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,200;0,300;0,400;0,600;0,800;1,300;1,400;1,600;1,800&family=Vollkorn&display=swap" rel="stylesheet" />
        </Head>

        <Header />
      <div>Welcome {name}!</div>
      <div>{email}</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    // connect db
    await dbConnect();
    // check cookie
    const token = getCookie("token", { req, res });
    if (!token)
      return {
        redirect: {
          destination: "/",
        },
      };

    const verified = await jwt.verify(token, process.env.JWT_SECRET);
    const obj = await User.findOne({ _id: verified.id });

    if (!obj)
      return {
        redirect: {
          destination: "/",
        },
      };

    
    return {
      props: {
        email: obj.email,
        name: obj.name,
        objUser: JSON.stringify(obj)
      },
    };
  } catch (err) {
    removeCookies("token", { req, res });
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}

export default Dashboard;
