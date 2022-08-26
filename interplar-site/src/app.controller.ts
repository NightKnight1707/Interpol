import {Controller, Get, Res} from "@nestjs/common";
import {Response} from "express";
import * as path from "path";


@Controller('')
export class AppController{
    @Get('/')
    getPortfolios(@Res() res: Response){
        const filePath = path.resolve(__dirname,'..','src/views',`index.html`)
        res.sendFile(filePath)
    }
}