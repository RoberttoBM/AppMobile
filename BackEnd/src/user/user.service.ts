import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './model/user.entity';
import { Repository } from 'typeorm';
import { UsuarioDTO } from './dto/persona.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    ) { }

    async findAll() {
        return this.usuarioRepository.find();
    }

    async read(IDPER: number) {
        let persona = await this.usuarioRepository.createQueryBuilder("persona")
        .where("persona.IDPER = :IDPER", { IDPER })
        .getOne();
        return persona;
    }

    async create(persona: UsuarioDTO) {
        let user = this.usuarioRepository.create(persona);
        return this.usuarioRepository.save(user);
    }

    async update(IDPER: number, persona: UsuarioDTO) {
        let user = this.usuarioRepository.update({ IDPER }, persona);
    }

    async delete(IDPER: number) {
        let user = this.usuarioRepository.delete({ IDPER });
    }

    async findByUserName(USUPER: string) {
        const userName = await this.usuarioRepository.createQueryBuilder("persona")
            .where("persona.USUPER = :USUPER", { USUPER })
            .getOne();
        return userName;
    } 
    
    async query(IDPER: number) {
        let user = this.usuarioRepository.createQueryBuilder('usuario');
    }


}
