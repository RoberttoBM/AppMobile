import { Controller, Get, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { PersonaDto } from './dto/persona.dto';


@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get('/read')
    getAll() {
        return this.userService.findAll();
    }

    @Get('read/:IDPER')
    async getPersona(@Param() params) {
        return this.userService.read(parseInt(params.IDPER));
    }

    @Get('notas/:IDPER')
    async getNotas(@Param() params) {
        return this.userService.getNotas(parseInt(params.IDPER));
    }



    @Post('crear/:IDPER')
    async create(@Body() data: PersonaDto) {
        return this.userService.create(data);
    }


}
