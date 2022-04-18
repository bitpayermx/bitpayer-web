import passport from "passport";
import { dbConnect } from "../../../mongodb/dbConnect";

import "../../../lib/passport";

export default async function (req, res, next) {
  
  await dbConnect();

  // res.status(200).json({ name: 'no hay 500 aqui' + process.env.DOMAIN })

  passport.authenticate("twitter", {
    session: false,
    
  })(req, res, next);
}
