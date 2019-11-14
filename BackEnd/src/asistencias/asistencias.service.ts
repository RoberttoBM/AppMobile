import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asistencias } from './model/asistencias.entity';

@Injectable()
export class AsistenciasService {

    constructor(@InjectRepository(Asistencias) 
    private AsistenciasRepository: Repository<Asistencias>,
    ){}

    async findAll(){
        return this.AsistenciasRepository.find();
    }

    async query(CODAUL:number){
        let asistencias = this.AsistenciasRepository.createQueryBuilder('Asistencias');
    }

}
