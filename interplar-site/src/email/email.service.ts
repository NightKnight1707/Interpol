import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";
import {EmailDto} from "./dto/email.dto";


@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendEmail(dto : EmailDto,file?: Express.Multer.File){
        if(file){
            try{
                await this.mailerService.sendMail({
                    to:"nightknight1707@gmail.com",
                    from:"79610280178@yandex.ru",
                    subject:`Заявка на проект от ${dto.name}`,
                    text:dto.text+`\nСвязаться с нами можно по:${dto.email}`,
                    attachments:[{
                        filename:file.originalname,
                        content: file.buffer
                    }]
                })
                return "success"
            } catch (e) {
                throw new HttpException('Произошла ошибка при отправке письма: '+e.toString(), HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }else {
            try{
                console.log(dto)
                await this.mailerService.sendMail({
                    to:"nightknight1707@gmail.com",
                    from:"79610280178@yandex.ru",
                    subject:`Заявка на проект от ${dto.name}`,
                    text:dto.text+`\nСвязаться с нами можно по:${dto.email}`
                })
                return "success"
            } catch (e) {
                throw new HttpException('Произошла ошибка при отправке письма: '+e.toString(), HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }
}
