import {getDir} from '../tool.mjs'
import path from 'path'
import express from 'express'

let listenUri = process.env['URI_HK1'] || 'hk1-app'
let __dirname = getDir(import.meta.url)
let apps = {}

function register(app){
    console.log('register listen uri: '+ listenUri)
    app.use(listenUri, express.static(path.resolve(__dirname, 'page')))
    app.use(listenUri, express.json())

    app.get(listenUri+'/svrs', function(req,res){
        res.send(JSON.stringify(Object.keys(apps).map(key=>apps[key])))
    })
    app.post(listenUri+'/reg', function(req,res){
        console.log(req.body)
        if(!req.body.gid){
            return res.send('{"status":"01","msg":"gid is required"}')
        }

        apps[req.body.gid] = {
            gid:req.body.gid,
            gname:req.body.gname,
            urls:req.body.urls
        }
        res.send(JSON.stringify({status:'00'}))
        // res.send(JSON.stringify(apps))
    })
}
export default register