import { Module } from '@nestjs/common';
import { AsistenciasController } from './asistencias.controller';
import { AsistenciasService } from './asistencias.service';
import { Asistencias } from './model/asistencias.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Asistencias])],
    controllers: [AsistenciasController],
    exports:[AsistenciasService],
    providers: [AsistenciasService]
})
export class AsistenciasModule { }
