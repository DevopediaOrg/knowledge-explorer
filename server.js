const express=require('express')
const app=express()
const path=require('path')
const port=process.env.port || 3000
//const router= () => require('./router/index.js')

app.use('/static',express.static('static'))

app.get('/', (req,res) => res.sendFile(path.join(__dirname+'/index.html')))
//app.get('*', (req,res) => console.log('Page Not Found'))
app.get('*', (req,res) => res.sendFile(path.join(__dirname+'/page_not_found.html')))

app.listen(port, () => console.log(`Listening on port ${port}`))