import { getCookie, removeCookies } from "cookies-next";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { useRouter } from "next/router";
import { dbConnect } from "../mongodb/dbConnect";

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
        <title>Dashboard</title>
      </Head>
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
