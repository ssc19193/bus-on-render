import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'
import dayjs from 'dayjs'
import express from 'express'

dayjs.extend(utc)
dayjs.extend(timezone)

let listenUri = process.env['URI_CFLOG'] || 'cloudflare-log'

function register(app){
    console.log('register listen uri: '+ listenUri)
    app.use(listenUri, express.text())
    app.post(listenUri, function(req,res){
        console.log(req.body);
        res.end();
    });
}
export default register