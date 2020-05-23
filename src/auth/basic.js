const basicStrategy = require('passport-http').BasicStrategy

module.exports = new basicStrategy(
    function(username, password, cb) {
        if (username == 'admin' && password == 'admin')
            return cb(null, true)
        else
            return cb(null, false)
    }
)