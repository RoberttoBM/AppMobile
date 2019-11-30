import { Controller, Get, Param } from '@nestjs/common';
import { NotasService } from './notas.service';

@Controller('notas')
export class NotasController {

    constructor(private notasService: NotasService){}

    @Get('/read')
    getAll(){
        return this.notasService.findAll();
    }


    //Parametro para obtener las notas por código de persona, lo consumimos desde nuestro servicio "notas"
     @Get('read/:IDPER')
    async getPersona(@Param('IDPER') IDPER: string) {
        return await this.notasService.read(parseInt(IDPER));
    } 
/* 
    @Get('read/:IDPER')
    async getNotas(@Param('IDPER') params) {
        return this.notasService.read(parseInt(params.IDPER));
    } */

}
