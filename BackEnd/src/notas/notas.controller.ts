import { Controller, Get, Param } from '@nestjs/common';
import { NotasService } from './notas.service';
import { INotas } from './interfaces/notas.interfaces';

@Controller('notas')
export class NotasController {

    constructor(private notasService: NotasService){}

    @Get('/read')
    getAll(){
        return this.notasService.findAll();
    }

    @Get(':CODMAT')
    async getPersona(@Param('CODMAT') CODMAT: string): Promise<INotas> {
        return await this.notasService.read(parseInt(CODMAT));
    }

}
