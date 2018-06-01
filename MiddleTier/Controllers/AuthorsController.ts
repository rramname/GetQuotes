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

            this.authorsRoutes.get("/:author",async(req,resp)=>{
                console.log("quote by auth")
                let re=await this.GetQuotesByAuthor(req.params.author);
                console.log("sending");
                console.log(re);
                resp.send(re);
            })
    }

     async GetTypeHead(){
    //     let resp = await  fetch("https://favqs.com/api/typeahead",{
    //         method:"GET",
    //         credentials: 'include',
    //         headers:{
    //             "Authorization":"Token token="
    //         }
    //     }).then(resp=>resp.json());
        let resp={
            "authors": [
                {
                    "name": "Henry David Thoreau",
                    "permalink": "henry-david-thoreau",
                    "count": 148
                },
                {
                    "name": "Ralph Waldo Emerson",
                    "permalink": "ralph-waldo-emerson",
                    "count": 139
                },
                {
                    "name": "Albert Einstein",
                    "permalink": "albert-einstein",
                    "count": 135
                },
                {
                    "name": "Mark Twain",
                    "permalink": "mark-twain",
                    "count": 126
                },
                {
                    "name": "Friedrich Nietzsche",
                    "permalink": "friedrich-nietzsche",
                    "count": 122
                },
                {
                    "name": "Mahatma Gandhi",
                    "permalink": "mahatma-gandhi",
                    "count": 118
                },
                {
                    "name": "George Bernard Shaw",
                    "permalink": "george-bernard-shaw",
                    "count": 117
                },
                {
                    "name": "Oscar Wilde",
                    "permalink": "oscar-wilde",
                    "count": 112
                },
                {
                    "name": "Benjamin Franklin",
                    "permalink": "benjamin-franklin",
                    "count": 112
                },
                {
                    "name": "Mitt Romney",
                    "permalink": "mitt-romney",
                    "count": 109
                },
                {
                    "name": "Thomas Jefferson",
                    "permalink": "thomas-jefferson",
                    "count": 102
                },
                {
                    "name": "Francois de La Rochefoucauld",
                    "permalink": "francois-de-la-rochefoucauld",
                    "count": 100
                },
                {
                    "name": "Aristotle",
                    "permalink": "aristotle",
                    "count": 100
                },
                {
                    "name": "Plato",
                    "permalink": "plato",
                    "count": 98
                },
                {
                    "name": "Barack Obama",
                    "permalink": "barack-obama",
                    "count": 94
                }]};
    return resp;
    }

    async GetQuotesByAuthor(author){
        let url="https://favqs.com/api/quotes/?filter="+author+"&type=author";
        console.log(url);
        let resp = await  fetch("https://favqs.com/api/quotes/?filter="+author+"&type=author",{
            method:"GET",
            credentials: 'include',
            headers:{
                "Authorization":"Token token="
            }
        }).then(resp=>resp.json());
        return resp;
        //https://favqs.com/api/quotes/?filter=Mark+Twain&type=author
    }
}
