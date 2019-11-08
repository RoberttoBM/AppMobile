import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Help } from './model/help.entity';
import { HelpDTO } from './dto/help.dto';

@Injectable()
export class HelpService {

    constructor(@InjectRepository(Help)
    private helpRepository: Repository<Help>,
    ) { }

    async findAll() {
        return this.helpRepository.find();
    }

    async create(help: Help) {
        let user = this.helpRepository.create(help);
        this.helpRepository.save(user);
    }

    async query(IDHELP: number) {
        let help = this.helpRepository.createQueryBuilder('help');
    }

}

