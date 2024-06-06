import express from 'express'
import hk1_app from './site/hk1-app/index.mjs'
import path from 'path'

const app = new express();
const port = process.env.APP_PORT || 80;

hk1_app(app)

console.log('using port:'+port)
app.listen(port, ()=>{
    console.log('server listening in http://127.0.0.1:'+port)
})
app.get('/favicon.ico', function(req,res){
    res.sendFile(path.resolve('.', 'site/favicon.ico'))
})