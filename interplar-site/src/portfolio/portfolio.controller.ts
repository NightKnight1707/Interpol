import {Controller, Get, Param, Res} from '@nestjs/common';
import { Response } from 'express'
import * as path from "path";


@Controller('projects')
export class PortfolioController {

    @Get(':name')
    getProjectByName(@Param() params, @Res() res: Response){
        const filePath = path.resolve(__dirname,'..','..','src/views',`${params.name}.html`)
        res.sendFile(filePath)
    }

    @Get('')
    getProjects(@Res() res: Response){
        const filePath = path.resolve(__dirname,'..','..','src/views',`portfolios.html`)
        res.sendFile(filePath)
    }

}
