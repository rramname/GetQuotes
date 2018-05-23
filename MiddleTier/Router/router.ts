import * as express from 'express'
export class Router{
    public routes:any;
    constructor(){
        this.routes=express.Router();
        this.routes.get('/default',(req,resp)=>{
            return "default working";
        })
    }

}