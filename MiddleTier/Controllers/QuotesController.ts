import * as express from 'express'
import * as http from "http"

import * as request from "request"
import * as fetch from "node-fetch";
import {QuoteModel} from "../../models/Quote.model"
export class QuotesController{
    public quoteRoutes:any;
    constructor(){
            this.quoteRoutes=express.Router();
            this.quoteRoutes.get("/",async (req,resp)=>{
                const q=await this.QuoteOfTheDay()
                resp.send(q);
            })
            
            
    }

 async QuoteOfTheDay(){
        let quote:QuoteModel;
        let qBody:string="";

         let resp = await  fetch("https://favqs.com/api/qotd").then(resp=>resp.json());
        quote=resp;
        console.log(resp);
        
        qBody=quote.quote.body
        console.log("returning"+qBody)
        return {"quote":qBody};

       
 }
    
}
