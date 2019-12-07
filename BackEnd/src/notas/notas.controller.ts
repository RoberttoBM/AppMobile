import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { NotasService } from './notas.service';
import { AuthGuard } from '@nestjs/passport';
import { SourceMapDevToolPlugin } from 'webpack';

@Controller('notas')
export class NotasController {

    constructor(private notasService: NotasService) { }

    @Get('/read')
    async getAll() {
        return this.notasService.findAll();
    }


    
    //Usamos este llamado para obtener todas las notas del estudiante por parametro de "IDPER"
    @Get('read/:IDPER')
    async getPersona(@Param('IDPER') IDPER: string) {
        return await this.notasService.getNotas(IDPER);
    }



}
