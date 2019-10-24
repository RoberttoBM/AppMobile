import { Controller, Get } from '@nestjs/common';
import { NotasService } from './notas.service'

@Controller('notas')
export class NotasController {

    constructor(private notasService: NotasService){}

    @Get('/read')
    getAll(){
        return this.notasService.findAll();
    }

}
