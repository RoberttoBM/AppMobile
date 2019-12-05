import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notas } from './model/notas.entity';


@Injectable()
export class NotasService {

    constructor(
        @InjectRepository(Notas) 
         private readonly NotasRepository: Repository<Notas>,){}

    async findAll(){
        return this.NotasRepository.find({relations: ['persona']});
    }

    async read(IDPER) {
        //let notas = await this.NotasRepository.createQueryBuilder("Notas")
        return this.NotasRepository.createQueryBuilder("Notas")
        .innerJoinAndSelect("Notas.IDPER", "IDPER")
        .where("Notas.IDPER = :IDPER", { IDPER })
        .getMany();
        //return notas;
    }

    async getNotas(IDPER){
        return this.NotasRepository.createQueryBuilder("notasPersona")
        .innerJoin("notasPersona.persona", "persona")
        .where("notasPersona.IDPER = :IDPER", {IDPER})
        .getMany();
    }
 





}
