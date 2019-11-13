import { Controller, Get, Body, Post} from '@nestjs/common';
import { HelpService } from './help.service';

@Controller('help')
export class HelpController {

    constructor(private helpService:HelpService){}

    @Get('/read')
    getAll() {
        return this.helpService.findAll();
    }

    @Post('/create')
    async create(@Body() data) {
        return this.helpService.create(data);
    }


}
