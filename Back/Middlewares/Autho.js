const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const user = require('../Models/User');

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secretKey;

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const foundUser = await user.findOne({ _id: jwt_payload._id }).select("-password");

        if (foundUser) {
            return done(null, foundUser); // req.user
        } else {
            return done(null, false); // unauthorized
            // or you could create a new account
        }
    } catch (err) {
        return done(err, false);
    }
}));

module.exports = isAuth = () => passport.authenticate('jwt', { session: false });