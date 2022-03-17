import { setCookies } from "cookies-next";
import passport from "passport";
import { dbConnect } from "../../../mongodb/dbConnect";

import "../../../lib/passport";

const DOMAIN = process.env.DOMAIN || "http://localhost:3000"

export default async function (req, res, next) {
  await dbConnect();
  passport.authenticate("facebook", (err, user, info) => {
    if (err || !user) {
      return res.redirect(`${DOMAIN}/?a=auth_fail`);
    }

    // set cookie and send redirect
    setCookies("token", info.token, {
      req,
      res,
    });
    res.redirect(`${DOMAIN}/dashboard`);
  })(req, res, next);
}
