const express=require('express')
const app=express()
const path=require('path')
const port=process.env.port || 3000

app.use('/static',express.static('static'))

app.get('/', (req,res) => res.sendFile(path.join(__dirname+'/index.html')))
app.get('/articles', (req, res) => res.sendFile(path.join(__dirname+'/mock/article-data.json')))
app.get('*', (req,res) => res.sendFile(path.join(__dirname+'/page_not_found.html')))

app.listen(port, () => console.log(`Listening on port ${port}`))