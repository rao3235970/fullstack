const express = require('express')

const app = express()

app.set('secret', 'sa12kh3kl')

app.use(express.json())
app.use(require('cors')())

app.use('/', express.static(__dirname + '/web'))
app.use('/admin', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./routes/admin')(app)
require('./plugins/db')(app)
require('./routes/web')(app)

app.listen('3000', () => {
    console.log('http://localhost:3000')
})