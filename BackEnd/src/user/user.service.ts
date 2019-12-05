import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonaDto } from './dto/persona.dto';
import { Persona } from './model/persona.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(Persona)
    private usuarioRepository: Repository<Persona>,
    ) { }

    async findAll() {
        return this.usuarioRepository.find({TIPPER: "4", ESTPER: "A    "});
    }

    async read(IDPER: number) {
        let persona = await this.usuarioRepository.createQueryBuilder("persona")
        .where("persona.IDPER = :IDPER", { IDPER })
        .getOne();
        return persona;
    }

    async create(persona: PersonaDto) {
        let user = this.usuarioRepository.create(persona);
        return this.usuarioRepository.save(user);
    }


    async findByUserName(USUPER: string) {
        let userName = await this.usuarioRepository.createQueryBuilder("persona")
            .where("persona.USUPER = :USUPER", { USUPER })
            .getOne();
        return userName;
    } 
    
    async query(IDPER: number) {
        let user = this.usuarioRepository.createQueryBuilder('usuario');
    }

    async getNotas(IDPER){
        return this.usuarioRepository.createQueryBuilder("persona")
        .innerJoinAndSelect("persona.notas", "notas")
        .where("persona.IDPER = :IDPER", {IDPER})
        .getMany();
    }


}
