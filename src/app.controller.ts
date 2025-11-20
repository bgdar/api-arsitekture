import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // walaupun menggunakan graph , ini tetap mengembalikan halaman pas getHello
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
