const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise