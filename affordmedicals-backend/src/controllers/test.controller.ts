import {Request, Response} from 'express';


export class TestApiController{
    constructor(){}
        public async getusers(req:Request,res:Response):Promise<void>{
            try{
                const users=[
                    {name:'John',age:25},{name:'Jane',age:30}]
                res.status(200).json(users);
            }
            catch(e:any){
                console.log(e);
            }
            res.status(500).json({message:'Internal Server Error Check the backend'});

        }
    
}