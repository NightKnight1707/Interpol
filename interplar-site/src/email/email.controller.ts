import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {EmailService} from "./email.service";
import {EmailDto} from "./dto/email.dto";


@Controller('email')
export class EmailController {

    constructor(private emailService : EmailService) {}

    @Post('')
    @UseInterceptors(FileInterceptor('file'))
    async sendMail(@Body() dto: EmailDto , @UploadedFile() file?){
        if(file){
            await this.emailService.sendEmail(dto ,file)
        }else{
            await this.emailService.sendEmail(dto)
        }
    }
}
