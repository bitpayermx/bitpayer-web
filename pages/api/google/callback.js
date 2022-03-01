import { setCookies } from "cookies-next";
import passport from "passport";
import { dbConnect } from "../../../mongodb/dbConnect";

import "../../../lib/passport";

export default async function (req, res, next) {
  await dbConnect();
  passport.authenticate("google", (err, user, info) => {
    if (err || !user) {
      return res.redirect("http://localhost:3000/?a=auth_fail");
    }

    // set cookie and send redirect
    setCookies("token", info.token, {
      req,
      res,
    });
    res.redirect("http://localhost:3000/dashboard");
  })(req, res, next);
}
