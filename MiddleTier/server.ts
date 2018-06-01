import * as express from 'express'
import * as router from './Router/router'
import * as QuoteRouter from "./Controllers/QuotesController"

import * as AuthorsRouter from "./Controllers/AuthorsController"
import * as TagsRouter from "./Controllers/TagsController"

console.log("ts file listening");
class app{
    express:express.Application;
    routes:router.Router;
    quoteRoutes:QuoteRouter.QuotesController;
    authorsRoutes:AuthorsRouter.AuthorsController;
    tagsRoutes:TagsRouter.TagsController;

    constructor(){
        this.quoteRoutes=new QuoteRouter.QuotesController();
        this.authorsRoutes=new AuthorsRouter.AuthorsController();
        this.tagsRoutes=new TagsRouter.TagsController();
        this.express=express();
        this.express.use((req, res, next)=> {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
           
            next();
          });
          
        this.express.use("/home",this.quoteRoutes.quoteRoutes);
        this.express.use("/authors",this.authorsRoutes.authorsRoutes);
        this.express.use("/Tags",this.tagsRoutes.tagsRoutes);

        this.express.listen(3000,()=>{
            console.log("express server started")
        })
    }

}
export default new app().express;
