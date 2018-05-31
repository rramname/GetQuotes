import * as express from 'express'
import * as http from "http"

import * as request from "request"
import * as fetch from "node-fetch";

export class AuthorsController{
    public authorsRoutes:any;
    private exp:express.Application;
    constructor(){
        this.exp=express();
        this.exp.use((req,resp,next)=>{
           
            next();
        })
            this.authorsRoutes=express.Router();
            
            this.authorsRoutes.get("/",async (req,resp)=>{
                let re=await this.GetTypeHead();
                resp.send(re);
            })
    }

    async GetTypeHead(){
        let resp = await  fetch("https://favqs.com/api/typeahead",{
            method:"GET",
            credentials: 'include',
            headers:{
                "Authorization":"Token token=b87a405f6efc955f5861946c602d82d9"
            }
        }).then(resp=>resp.json());
        
        console.log(resp)
        return resp;
    }
}