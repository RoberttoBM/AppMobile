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

    async query(IDPER:number){
        let asistencias = this.AsistenciasRepository.createQueryBuilder('Asistencias');
    }

    async read(IDPER: number) {
        let asistencias = await this.AsistenciasRepository.createQueryBuilder("Asistencias")
        .where("Asistencias.IDPER = :IDPER", { IDPER })
        .getOne();
        return asistencias;
    }

    async findByUserName(USUPER: string) {
        const asistencias = await this.AsistenciasRepository.createQueryBuilder("Asistencias")
            .where("Asistencias.USUPER = :USUPER", { USUPER })
            .getOne();
        return asistencias;
    } 

}
