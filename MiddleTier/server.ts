import * as express from 'express'
import * as router from './Router/router'
import * as QuoteRouter from "./Controllers/QuotesController"
console.log("ts file listening");
class app{
    express:express.Application;
    routes:router.Router;
    quoteRoutes:QuoteRouter.QuotesController;
    constructor(){
        this.quoteRoutes=new QuoteRouter.QuotesController();
        this.express=express();
        this.express.use((req, res, next)=> {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });
          
        this.express.use("/home",this.quoteRoutes.quoteRoutes)
        this.express.listen(3000,()=>{
            console.log("express server started")
        })
    }

}
export default new app().express;
