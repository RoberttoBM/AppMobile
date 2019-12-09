import { Controller, Get, Param } from '@nestjs/common';
import { PerfilService } from './perfil.service';

@Controller('perfil')
export class PerfilController {


    constructor(private perfilService: PerfilService) { }
    @Get('/read')
    async getAll() {
        return this.perfilService.findAll();
    }



    @Get('read/:IDPER')
    async getPerfil(@Param('IDPER') IDPER: number) {
        return await this.perfilService.read(IDPER);
    }
}