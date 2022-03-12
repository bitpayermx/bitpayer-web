// const express = require("express");
// const morgan = require('morgan')
// const app = express({
//   verify: (req, res, buf) => {
//     req.rawBody = buf;
//   },
// });

// app.use(morgan('dev'))
// app.use(express.json({
//     verify: (req, res, buf) => {
//       req.rawBody = buf;
//     },
//   }))

// const {
//   COINBASE_API_KEY,
//   COINBASE_WEBHOOK_SECRET,
//   DOMAIN,
// } = require("./config");


const { Client, resources } = require("coinbase-commerce-node");
const Webhook = require("coinbase-commerce-node/lib/Webhook");

Client.init(COINBASE_API_KEY);

const { Charge } = resources;

app.get("/create-charge", async (req, res) => {
  const chargeData = {
    name: "Curso bitcoin desde cero",
    description:
      "Aprende las bases hasta nivel intermedio sobre como funciona bitcoin yas criptomonedas y porqué son la alternativa que el mundo require",
    local_price: {
      amount: "0.1",
      currency: "USD",
    },
    pricing_type: "fixed_price",
    metadata: {
      customer_id: "_4354",
      customer_name: "Mario",
    },
    redirect_url: `${DOMAIN}/success-payment`,
    cancel_url: `${DOMAIN}/cancel-payment`,
  };

  const charge = await Charge.create(chargeData);

  res.send(charge);
});

app.get("/success-payment", (req, res) => {
  res.send("payment successful");
});
app.get("/cancel-payment", (req, res) => {
  res.send("Cancelled payment");
});

app.post("/payment-handler", (req, res) => {
  const rawBody = req.rawBody;
  const signature = req.headers["x-cc-webhook-signature"];
  const webhookSecret = COINBASE_WEBHOOK_SECRET;
  let event = null;

  try {
    event = Webhook.verifyEventBody(rawBody, signature, webhookSecret);
    if (event.type === "charge:pending") {
      console.log("charge is pending");
    }

    if (event.type === "charge:failed") {
      console.log("charge is failed");
    }

    if (event.type === "charge:confirmed") {
      console.log("charge is confirmed");
    }

    res.status(200).send(event.id)
  } catch (error) {
      res.status.status(400).send('failed')
  }
});

app.listen(3000, () => {
  console.log("server on port 3000");
});
