import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notas } from './model/notas.entity';


@Injectable()
export class NotasService {

    constructor(@InjectRepository(Notas) 
    private NotasRepository: Repository<Notas>,
    ){}

    async findAll(){
        return this.NotasRepository.find();
    }

    //Obteniendo las notas por código de persona
    async read(IDPER: number) {
        let notas = await this.NotasRepository.createQueryBuilder("Notas")
        .where("Notas.IDPER = :IDPER", { IDPER })
        //con este metodo llamamamos a todas las notas que tengan el codigo del estudiante logueado
        //si ponemos ".getOne();" solo llamara uno solo, pero ese metodo solo lo usaremos en el login
        .getMany();
        return notas;
    }
 
    async query(IDPER:number){
        let notas = this.NotasRepository.createQueryBuilder('Notas');
    }
}
