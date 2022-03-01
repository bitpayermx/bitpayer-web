import React from 'react'

const Footer = () => {
    return (
        <footer className="footer back-darkblue relative">
		      <div className="padding20">
		      
		        <div className="padding20-0">
		          <h3 className="color-white font1-5em text-center">No te pierdas, sigue conectado y recibe promociones.</h3>
		        </div>

		        
		        
		        <div className=" flex margin20-0 center-block" style={{maxWidth:480 + "px" }}>
		          <input type="email" className="my-input" placeholder="email@gmail.com" name="" />
		          <button className="my-btn back-green margin-left10 color-green block-desktop hide" style={{width: 150 + "px"}}>
		            <span className="font1em  color-white">Suscribirme</span>
		          </button>
		        </div>

		        <div className="flex flex-center">
		          <button className="my-btn back-green margin-bottom10 color-green hide-desktop" style={{width: 150 + "px"}}>
		            Suscribirme
		          </button>
		        </div>

		        <div className="text-center relative" style={{top:0+"px"}}>
		          <h3 className="color-lightgray margin-bottom0 font1-3em">Vamos, Conectémos en la economía global!</h3>
		          <p className="text-center color-white font2em padding10 margin-bottom10">
		            <span className="ion-social-twitter margin-right20"></span>
		            <a href="https://www.facebook.com/bitpayer.mx.1" className="ion-social-facebook margin-right20 color-white"></a>
		            <span className="ion-social-whatsapp"></span>
		          </p>
		          
		        </div>


		        <div className="absolute width100" style={{bottom:22+"px", left:0}}>
		          <p className="font1-3em text-center  color-white">Desde México con <span className="ion-heart color-green font1-3em relative" style={{top:3 + "px"}}></span> para el mundo.</p>
		        </div>
		        <br />

		      </div>
		    </footer>
    )
}

export default Footer
