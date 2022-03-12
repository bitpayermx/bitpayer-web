import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'


import Header from '../../components/Header.jsx'

export default function CrearPgo(){

    const [userLogged, setUserLogged] = useState(null)
    const [amount, setAmount] = useState(0)
    const [currency, setCurrency] = useState(null)
    const [reference, setReference] = useState('')


    useEffect(()=>{
        if(localStorage.getItem('user')){
        setUserLogged(JSON.parse(localStorage.getItem('user')))
        }
    }, [])

    

    const fetchData = async () => {
        const dataCharge = {
            amount,
            currency,
            reference,
            customer_name: userLogged.name,
            customer_id: userLogged._id
        }
        axios.get('/api/charges', {params: dataCharge})
            .then(res =>{
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
        

        // console.log('hey dataaa', newData)
    };

    const handleClick = (event) => {
        event.preventDefault();
        fetchData();
    };

    const handleChangeAmount = (event)=>{
        setAmount(event.target.value)
    }

    const handleChangeCurrency = (event)=>{
        setCurrency(event.target.value)

    }

    const handleChangeReference = (event)=>{
        setReference(event.target.value)
    }
    
    return (
        <div>
            <Head>
            <title>Bitpayer - Bitcoin hecho fácil.</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Poppins|Lakki+Reddy|Rancho&display=swap" rel="stylesheet" />
            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            </Head>

            <Header />
            <main>

                <div className='padding20'></div>
                <div className='padding20'></div>

                <section className='my-container'>
                    <article className='padding20'>
                        <div className='flex flex-middle'>
                            <div className='margin10'>
                                <h2 className='font1em'>Cantidad:</h2>
                                <div className='flex'>
                                    <input className='my-input' type="number" onChange={handleChangeAmount}/>
                                </div>
                            </div>

                            <div className='margin10'>
                                <h2 className='font1em'>Moneda:</h2>
                                {/* <div>
                                    <select >
                                        <option>-</option>
                                        <option value="MXN">MXN</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div> */}
                                <div className="back-white my-select font1em color-black" style={{width:130+"px"}}>
                                    <select onChange={handleChangeCurrency}>
                                        <option>-</option>
                                        <option value="MXN">MXN</option>
                                        <option value="USD">USD</option>
                                    </select>
                                    
                                    <div class="my-select-icon color-black flex flex-middle">
                                        <span class="ion-arrow-down-b"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='margin10'>
                            <h2 className='font1em'>Referencia:</h2>
                            <div className='flex'>
                                <input className='my-input' type="text" onChange={handleChangeReference}/>
                            </div>
                        </div>
                        <div className='margin10'>
                            <button onClick={handleClick} className='my-btn back-green'>Crear pago</button>
                        </div>
                    </article>
                </section>

            </main>
            
        </div>
    )
}