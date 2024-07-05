import express from 'express'
import path from 'path'
import hk1_app from './site/hk1-app/index.mjs'
import cloudFlareLog from './site/cloudflare-log/index.mjs'

const app = new express();
const port = process.env.APP_PORT || 80;

hk1_app(app)
cloudFlareLog(app)

console.log('using port:'+port)
app.listen(port, ()=>{
    console.log('server listening in http://127.0.0.1:'+port)
})
app.get('/favicon.ico', function(req,res){
    res.sendFile(path.resolve('.', 'site/favicon.ico'))
})