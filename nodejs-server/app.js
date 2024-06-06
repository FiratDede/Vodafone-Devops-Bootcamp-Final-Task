const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Vodafone Devops Bootcamp!')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

module.exports = app
