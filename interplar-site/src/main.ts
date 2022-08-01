import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {NestExpressApplication} from "@nestjs/platform-express";
import { join } from 'path'


async function start(){
    const PORT = process.env.PORT
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    app.setBaseViewsDir(join(__dirname, '..', 'views'))

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()