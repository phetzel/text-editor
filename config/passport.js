const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = rewquire("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const keys = require("./keys");

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      console.log(jwt_payload);
      done();
    })
  );
};
