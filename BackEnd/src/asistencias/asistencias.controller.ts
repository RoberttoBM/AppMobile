import { Controller, Get, Param } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { IAsistencias } from './interfaces/IAsistencias';

@Controller('asistencias')
export class AsistenciasController {

    constructor(private asistenciasService: AsistenciasService) { }

    //traer asistencias de todos los estudiantes
    @Get('/read')
    getAll() {
        return this.asistenciasService.findAll();
    }


    //traer notas del estudiante por parametro
    @Get('traer/:IDPER')
    async getPersona(@Param('IDPER') IDPER: string): Promise<IAsistencias> {
        return await this.asistenciasService.read(parseInt(IDPER));
    }


    


}



