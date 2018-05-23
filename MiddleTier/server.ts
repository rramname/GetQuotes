import * as express from 'express'
import * as routes from './Router/router'
console.log("ts file listening");
class app{
    express:express.Application;
    routes:routes.Router;
  
    constructor(){
        
        this.express=express();
        this.express.listen(3000,()=>{
            console.log("express server started")
        })
    }

}
export default new app().express;
