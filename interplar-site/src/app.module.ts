import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import { EmailModule } from './email/email.module';
import {MailerModule} from "@nestjs-modules/mailer";
import {AppController} from "./app.controller";
import { PortfolioModule } from './portfolio/portfolio.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'


@Module({
    controllers: [AppController],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname,'views')
        }),
        MailerModule.forRoot({
            transport:{
                host:process.env.EMAIL_HOST,
                port: Number(process.env.EMAIL_PORT),
                auth:{
                    user:process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                }
            },
        }),
        EmailModule,
        PortfolioModule
    ]
})

export class AppModule{}