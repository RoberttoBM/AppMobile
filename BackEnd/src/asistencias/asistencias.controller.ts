import { Controller, Get, Param } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';

@Controller('asistencias')
export class AsistenciasController {

    constructor(private asistenciasService: AsistenciasService) { }

    //traer asistencias de todos los estudiantes
    @Get('/read')
    getAll() {
        return this.asistenciasService.findAll();
    }


    //traer notas del estudiante por parametro
    @Get('read/:IDPER')
    async getAsistencias(@Param('IDPER') IDPER: string) {
        return await this.asistenciasService.getAsistencias(IDPER);
    }


    


}



