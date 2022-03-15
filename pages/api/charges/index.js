import { dbConnect } from "../../../mongodb/dbConnect";

dbConnect()

const DOMAIN = process.env.DOMAIN || "http://localhost:3000"


const {
  COINBASE_API_KEY,
  COINBASE_WEBHOOK_SECRET,
} = require("../../../config");


const { Client, resources } = require("coinbase-commerce-node");
const Webhook = require("coinbase-commerce-node/lib/Webhook");

Client.init(COINBASE_API_KEY);

const { Charge } = resources;


export default async function handler(req, res) {

  console.log('req',req.query)
  // res.status(200).json({name: "hello charges"});

  // return false

  const chargeData = {
    name: `Pagar a: ${req.query.customer_name}`,
    description: req.query.description,
    local_price: {
      amount: req.query.amount,
      currency: req.query.currency,
    },
    pricing_type: "fixed_price",
    metadata: {
      customer_id: req.query.customer_id,
      customer_name: req.query.customer_name,
    },
    redirect_url: `${DOMAIN}/success-payment`,
    cancel_url: `${DOMAIN}/cancel-payment`,
  };

  const charge = await Charge.create(chargeData);

  res.send(charge);

  // if(charge){
  //   res.status(200).json(charge);
  // }
  


}
