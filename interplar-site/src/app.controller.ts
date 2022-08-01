import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";


@Controller('/')
export class AppController{

}