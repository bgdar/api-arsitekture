import { Controller, Get, Render } from '@nestjs/common';

@Controller('books-test')
export class ControllerController {

  @Get()
  // @Render()
  /**
  * halaman Html untuk menampilkan Navigasi untuk pengetesan GraphQl
  */
  index(){
    return "tets api"
  }

  // update 

}
