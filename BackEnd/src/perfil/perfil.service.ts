import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perfil } from './model/perfil.entity';

@Injectable()
export class PerfilService {

    constructor(@InjectRepository(Perfil) private readonly PerfilRepository: Repository<Perfil>, ) { }

    async findAll() {
        return this.PerfilRepository.find({ relations: ['persona'] });

    }

    async read(IDPER) {
        return this.PerfilRepository.createQueryBuilder("Perfil")
        .innerJoin("Perfil.persona", "persona")
        .where("Perfil.IDPER = :IDPER", {IDPER})
        .getMany();
    }
    /*  
 

 
     async getNotas(IDPER){
         return this.NotasRepository.createQueryBuilder("notasPersona")
         .innerJoin("notasPersona.persona", "persona")
         .where("notasPersona.IDPER = :IDPER", {IDPER})
         .getMany();
     } */






}