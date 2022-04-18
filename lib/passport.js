import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import FacebookStrategy from 'passport-facebook';
import TwitterStrategy from 'passport-twitter';

import User from "../models/User";
import jwt from "jsonwebtoken";

const DOMAIN = process.env.DOMAIN || "http://localhost:3000"

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${DOMAIN}/api/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log(profile)
      try {
        const obj = await User.findOne({ email: profile.email, strategyUsed: 'google' });
        if (!obj) {
          // create new user
          const newUser = new User({
            email: profile.email,
            strategyUsed: 'google',
            name: profile.displayName,
            accessToken
          });
          await newUser.save();
          const token = await jwt.sign(
            {
              id: newUser._id,
              created: Date.now().toString(),
            },
            process.env.JWT_SECRET
          );
          newUser.token = token;
          await newUser.save();
          done(null, newUser, { message: "Auth successful", token });
        } else {
          // login existing user
          const token = await jwt.sign(
            {
              id: obj._id,
              created: Date.now().toString(),
            },
            process.env.JWT_SECRET
          );
          obj.token = token;
          await obj.save();
          done(null, obj, { message: "Auth successful", token });
        }
      } catch (err) {
        console.error(err);
        done(err, false, { message: "Internal server error" });
      }
    }
  )
);



passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${DOMAIN}/api/facebook/callback`,
    profileFields : ['id', 'displayName', 'emails', 'photos']
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    let emailFound = null
    let profilePicFound = null
    let firstName = profile.displayName.split(" ")[0]

    if(profile && profile.emails && profile.emails.length > 0){
      emailFound = profile.emails[0].value
    }

    if(profile && profile.photos && profile.photos.length > 0){
      profilePicFound = profile.photos[0].value
    }


    try {
      const obj = await User.findOne({ email: emailFound, strategyUsed: 'facebook'});

      if (!obj) {
        // create new user
        const newUser = new User({
          email: emailFound,
          profilePic: profilePicFound,
          strategyUsed: 'facebook',
          name: firstName,
          accessToken
        });
        await newUser.save();
        const token = await jwt.sign(
          {
            id: newUser._id,
            created: Date.now().toString(),
          },
          process.env.JWT_SECRET
        );
        newUser.token = token;
        await newUser.save();
        done(null, newUser, { message: "Auth successful", token });
      } else {
        // login existing user
        const token = await jwt.sign(
          {
            id: obj._id,
            created: Date.now().toString(),
          },
          process.env.JWT_SECRET
        );
        obj.token = token;
        await obj.save();
        done(null, obj, { message: "Auth successful", token });
      }
    } catch (err) {
      console.error(err);
      done(err, false, { message: "Internal server error" });
    }
  }
));



passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: `${DOMAIN}/api/facebook/callback`,
    profileFields : ['id', 'displayName', 'emails', 'photos']
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    let emailFound = null
    let profilePicFound = null
    let firstName = profile.displayName.split(" ")[0]

    if(profile && profile.emails && profile.emails.length > 0){
      emailFound = profile.emails[0].value
    }

    if(profile && profile.photos && profile.photos.length > 0){
      profilePicFound = profile.photos[0].value
    }


    try {
      const obj = await User.findOne({ email: emailFound, strategyUsed: 'facebook'});

      if (!obj) {
        // create new user
        const newUser = new User({
          email: emailFound,
          profilePic: profilePicFound,
          strategyUsed: 'facebook',
          name: firstName,
          accessToken
        });
        await newUser.save();
        const token = await jwt.sign(
          {
            id: newUser._id,
            created: Date.now().toString(),
          },
          process.env.JWT_SECRET
        );
        newUser.token = token;
        await newUser.save();
        done(null, newUser, { message: "Auth successful", token });
      } else {
        // login existing user
        const token = await jwt.sign(
          {
            id: obj._id,
            created: Date.now().toString(),
          },
          process.env.JWT_SECRET
        );
        obj.token = token;
        await obj.save();
        done(null, obj, { message: "Auth successful", token });
      }
    } catch (err) {
      console.error(err);
      done(err, false, { message: "Internal server error" });
    }
  }
));


passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_API_KEY,
  consumerSecret: process.env.TWITTER_API_SECRET,
  callbackURL: `${DOMAIN}/api/twitter/callback`,
},
async (accessToken, refreshToken, profile, done) => {
  console.log(profile)
  let emailFound = null
  let profilePicFound = null
  let firstName = profile.displayName.split(" ")[0]

  if(profile && profile.emails && profile.emails.length > 0){
    emailFound = profile.emails[0].value
  }

  if(profile && profile.photos && profile.photos.length > 0){
    profilePicFound = profile.photos[0].value
  }


  try {
    const obj = await User.findOne({ email: emailFound, strategyUsed: 'facebook'});

    if (!obj) {
      // create new user
      const newUser = new User({
        email: emailFound,
        profilePic: profilePicFound,
        strategyUsed: 'facebook',
        name: firstName,
        accessToken
      });
      await newUser.save();
      const token = await jwt.sign(
        {
          id: newUser._id,
          created: Date.now().toString(),
        },
        process.env.JWT_SECRET
      );
      newUser.token = token;
      await newUser.save();
      done(null, newUser, { message: "Auth successful", token });
    } else {
      // login existing user
      const token = await jwt.sign(
        {
          id: obj._id,
          created: Date.now().toString(),
        },
        process.env.JWT_SECRET
      );
      obj.token = token;
      await obj.save();
      done(null, obj, { message: "Auth successful", token });
    }
  } catch (err) {
    console.error(err);
    done(err, false, { message: "Internal server error" });
  }
}
));
