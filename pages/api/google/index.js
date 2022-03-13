import passport from "passport";
import { dbConnect } from "../../../mongodb/dbConnect";

import "../../../lib/passport";

export default async function (req, res, next) {
  await dbConnect();

  res.status(200).json({ name: 'no hay 500 aqui' })

  // passport.authenticate("google", {
  //   scope: ["profile", "email"],
  //   session: false,
  // })(req, res, next);
}
