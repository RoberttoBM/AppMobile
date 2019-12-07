import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asistencias } from './model/asistencias.entity';

@Injectable()
export class AsistenciasService {

    constructor(@InjectRepository(Asistencias) 
    private readonly AsistenciasRepository: Repository<Asistencias>,
    ){}

    async findAll(){
        return this.AsistenciasRepository.find();
    }

    async query(IDPER:number){
        let asistencias = this.AsistenciasRepository.createQueryBuilder('Asistencias');
    }

    async getAsistencias(IDPER){
        return this.AsistenciasRepository.createQueryBuilder("asistencias")
        .innerJoin("asistencias.persona", "persona")
        .where("asistencias.IDPER = :IDPER", {IDPER})
        .getMany();
    }

}



