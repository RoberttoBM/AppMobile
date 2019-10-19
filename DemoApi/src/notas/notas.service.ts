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

    async query(CODMAT:number){
        let notas = this.NotasRepository.createQueryBuilder('Notas');
    }

}
