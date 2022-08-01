import {Controller, Get, Param, Res, Render} from '@nestjs/common';
import { Response } from 'express'
import * as path from "path";


@Controller('portfolio')
export class PortfolioController {

    @Get(':name')
    getPortfolioByName(@Param() params, @Res() res: Response){
        const filePath = path.resolve(__dirname,'..','..','src/views',`${params.name}.html`)
        res.sendFile(filePath)
    }

}
