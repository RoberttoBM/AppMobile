import { Controller, Get, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UsuarioDTO } from './dto/persona.dto';
import { IPersona } from './interfaces/persona.interfaces';


@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Get('/read')
    getAll(){
        return this.userService.findAll();
    }

    @Get('leer/:IDPER')
    async getPersona(@Param('IDPER') IDPER: string): Promise<IPersona> {
        return await this.userService.read(parseInt(IDPER));
    }

    @Post('crear/:IDPER')
    async create(@Body() data: UsuarioDTO){
        return this.userService.create(data);
    }

    @Put(':IDPER')
    async actualizarPersona(@Body() data, @Param('IDPER') IDPER:number){
        return await this.userService.update(IDPER, data);
    }

    @Delete(':IDPER')
    async delete(@Param('IDPER') IDPER:number){
        return await this.userService.delete(IDPER);
    }

}
