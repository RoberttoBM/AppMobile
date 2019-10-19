import { Controller, Get } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';

@Controller('asistencias')
export class AsistenciasController {

    constructor(private asistenciasService: AsistenciasService){}

    @Get('/ver')
    getAll(){
        return this.asistenciasService.findAll();
    }

}



