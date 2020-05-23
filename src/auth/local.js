const localStrategy = require('passport-local')

module.exports = (passport) => {
    passport.serializeUser((user, cb) => {
        return cb(null, user._id)
    })

    passport.deserializeUser((id, cb) => {
        User
            .findById(id)
            .then(user => cb(null, user))
            .catch(err => cb(err, {}))
    })
}