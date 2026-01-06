import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller() // walaupun menggunakan graph , ini tetap mengembalikan halaman pas getHello
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    
    const daftarApi = {
      "main api":"grapsql",
      "test api untuk books api grapsql" :"books-test"
    }
    // return this.appService.getHello();
    return JSON.stringify(daftarApi);

  }
}
