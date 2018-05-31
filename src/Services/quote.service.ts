import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
@Injectable()
export class QuoteService
{
    constructor(private http:HttpClient){

    }

     home(){   
        console.log("call")
        return this.http.get("http://localhost:3000/home").toPromise().then((resp)=>{
        console.log("resp:")    
        console.log(resp);
           return resp["quote"];
        });
       
    
    }

    GetTypeHeads(){
            if(this.typesHeades==null){
                return this.http.get("http://localhost:3000/authors").toPromise().then((resp)=>{
                    this.typesHeades=resp;
                    
                });
            }

    }


    typesHeades:any;
}