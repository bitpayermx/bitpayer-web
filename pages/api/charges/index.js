import { dbConnect } from "../../../mongodb/dbConnect";

dbConnect()


const {
  COINBASE_API_KEY,
  COINBASE_WEBHOOK_SECRET,
  DOMAIN,
} = require("../../../config");


// const { Client, resources } = require("coinbase-commerce-node");
// const Webhook = require("coinbase-commerce-node/lib/Webhook");

// Client.init(COINBASE_API_KEY);

// const { Charge } = resources;


export default function handler(req, res) {

  console.log('req',req.query)
  res.status(200).json({name: "hello charges"});

  // return false

  // const chargeData = {
  //   name: "Curso bitcoin desde cero",
  //   description:
  //     "Aprende las bases hasta nivel intermedio sobre como funciona bitcoin yas criptomonedas y porqué son la alternativa que el mundo require",
  //   local_price: {
  //     amount: "0.1",
  //     currency: "USD",
  //   },
  //   pricing_type: "fixed_price",
  //   metadata: {
  //     customer_id: "_4354",
  //     customer_name: "Mario",
  //   },
  //   redirect_url: `${DOMAIN}/success-payment`,
  //   cancel_url: `${DOMAIN}/cancel-payment`,
  // };

  // const charge = await Charge.create(chargeData);

  // res.send(charge);


}
