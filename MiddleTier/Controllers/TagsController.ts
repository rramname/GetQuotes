import * as express from 'express'
import * as http from "http"

import * as request from "request"
import * as fetch from "node-fetch";

export class TagsController{
    public tagsRoutes:any;
    private exp:express.Application;
    constructor(){
        this.exp=express();
        this.exp.use((req,resp,next)=>{
           
            next();
        })
        
        this.tagsRoutes=express.Router();
            
        this.tagsRoutes.get("/",async (req,resp)=>{
            let re=await this.GetTags();
            resp.send(re);
        })

        this.tagsRoutes.get("/:tag",async(req,resp)=>{
            let re=await this.GetQuotesByTag(req.params.tag);
            resp.send(re);
        })
    }


    private GetTags(){
            let resp={ "tags":[
                {
                    "name": "life",
                    "permalink": "life",
                    "count": 1004
                },
                {
                    "name": "religion",
                    "permalink": "religion",
                    "count": 990
                },
                {
                    "name": "god",
                    "permalink": "god",
                    "count": 988
                },
                {
                    "name": "happiness",
                    "permalink": "happiness",
                    "count": 983
                },
                {
                    "name": "work",
                    "permalink": "work",
                    "count": 981
                },
                {
                    "name": "men",
                    "permalink": "men",
                    "count": 981
                },
                {
                    "name": "great",
                    "permalink": "great",
                    "count": 977
                },
                {
                    "name": "nature",
                    "permalink": "nature",
                    "count": 977
                },
                {
                    "name": "knowledge",
                    "permalink": "knowledge",
                    "count": 975
                },
                {
                    "name": "truth",
                    "permalink": "truth",
                    "count": 975
                },
                {
                    "name": "science",
                    "permalink": "science",
                    "count": 975
                },
                {
                    "name": "good",
                    "permalink": "good",
                    "count": 974
                },
                {
                    "name": "love",
                    "permalink": "love",
                    "count": 974
                },
                {
                    "name": "time",
                    "permalink": "time",
                    "count": 968
                },
                {
                    "name": "funny",
                    "permalink": "funny",
                    "count": 968
                },
                {
                    "name": "death",
                    "permalink": "death",
                    "count": 967
                },
                {
                    "name": "business",
                    "permalink": "business",
                    "count": 962
                },
                {
                    "name": "power",
                    "permalink": "power",
                    "count": 961
                },
                {
                    "name": "fear",
                    "permalink": "fear",
                    "count": 959
                },
                {
                    "name": "best",
                    "permalink": "best",
                    "count": 957
                },
                {
                    "name": "faith",
                    "permalink": "faith",
                    "count": 957
                },
                {
                    "name": "politics",
                    "permalink": "politics",
                    "count": 954
                },
                {
                    "name": "society",
                    "permalink": "society",
                    "count": 952
                },
                {
                    "name": "war",
                    "permalink": "war",
                    "count": 951
                },
                {
                    "name": "history",
                    "permalink": "history",
                    "count": 951
                },
                {
                    "name": "success",
                    "permalink": "success",
                    "count": 950
                },
                {
                    "name": "alone",
                    "permalink": "alone",
                    "count": 949
                },
                {
                    "name": "education",
                    "permalink": "education",
                    "count": 946
                },
                {
                    "name": "learning",
                    "permalink": "learning",
                    "count": 943
                },
                {
                    "name": "marriage",
                    "permalink": "marriage",
                    "count": 941
                },
                {
                    "name": "government",
                    "permalink": "government",
                    "count": 940
                },
                {
                    "name": "hope",
                    "permalink": "hope",
                    "count": 939
                },
                {
                    "name": "money",
                    "permalink": "money",
                    "count": 939
                },
                {
                    "name": "respect",
                    "permalink": "respect",
                    "count": 939
                },
                {
                    "name": "freedom",
                    "permalink": "freedom",
                    "count": 938
                },
                {
                    "name": "future",
                    "permalink": "future",
                    "count": 937
                },
                {
                    "name": "peace",
                    "permalink": "peace",
                    "count": 936
                },
                {
                    "name": "experience",
                    "permalink": "experience",
                    "count": 934
                },
                {
                    "name": "health",
                    "permalink": "health",
                    "count": 928
                },
                {
                    "name": "age",
                    "permalink": "age",
                    "count": 927
                },
                {
                    "name": "change",
                    "permalink": "change",
                    "count": 925
                },
                {
                    "name": "beauty",
                    "permalink": "beauty",
                    "count": 925
                },
                {
                    "name": "relationship",
                    "permalink": "relationship",
                    "count": 918
                },
                {
                    "name": "music",
                    "permalink": "music",
                    "count": 909
                },
                {
                    "name": "home",
                    "permalink": "home",
                    "count": 904
                },
                {
                    "name": "women",
                    "permalink": "women",
                    "count": 899
                },
                {
                    "name": "mom",
                    "permalink": "mom",
                    "count": 893
                }]}

                return resp;
    }

    private async GetQuotesByTag(tag){
    
        let url="https://favqs.com/api/quotes/?filter="+tag+"&type=tag";
        console.log(url)
        let resp = await  fetch(url,{
            method:"GET",
            credentials: 'include',
            headers:{
                "Authorization":"Token token=b87a405f6efc955f5861946c602d82d9"
            }
        }).then(resp=>resp.json());
        return resp;
    }
}