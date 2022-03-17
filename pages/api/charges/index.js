import { dbConnect } from "../../../mongodb/dbConnect";
import Payment from "../../../models/Payment";

dbConnect()

const DOMAIN = process.env.DOMAIN || "http://localhost:3000"


// const {
//   COINBASE_API_KEY,
//   COINBASE_WEBHOOK_SECRET,
// } = require("../../../config");


const { Client, resources } = require("coinbase-commerce-node");
const Webhook = require("coinbase-commerce-node/lib/Webhook");

Client.init(process.env.COINBASE_API_KEY);

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

  const newPayment = new Payment({
    addresses: charge.addresses,
    customer_id: req.query.customer_id,
    code: charge.code,
    cancel_url: charge.cancel_url,
    created_at: charge.created_at,
    description: charge.description,
    exchange_rates: charge.exchange_rates,
    expires_at: charge.expires_at,
    fees_settled: charge.fees_settled,
    coinbase_payment_id: charge.id,
    hosted_url: charge.hosted_url,
    local_exchange_rates: charge.local_exchange_rates,
    metadata: charge.metadata,
    organization_name: charge.organization_name,
    payment_threshold: charge.payment_threshold,
    payments: charge.payments,
    pricing: charge.pricing,
    pricing_type: charge.pricing_type,
    pwcb_only: charge.pwcb_only,
    redirect_url: charge.redirect_url,
    resource: charge.resource,
    //cambiar este email al registrado en bitpayer en su momento quizas
    support_email: charge.support_email,
    timeline: charge.timeline,
    utxo: charge.utxo
  });
  await newPayment.save();

  res.send(charge);

  // if(charge){
  //   res.status(200).json(charge);
  // }
  


}
