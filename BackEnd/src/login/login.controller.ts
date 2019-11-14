import { Controller, Request, Post, UseGuards, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './../auth/auth.service';

@Controller('login')
export class LoginController {

    constructor(private readonly authService: AuthService) { }

    /* @UseGuards(AuthGuard('local')) */
    @Get('/:usr/:pwd')
    async login(@Param() params){
        return this.authService.mylogin(params.usr, params.pwd);
    }
    /* @Post()
    async login(@Request() req) {
        console.log(req.user);
        return this.authService.login(req.user);
    } */


    //constructor(private loginService: LoginService) { }

    // @Post('login')
    // login(@Body() data: Credential){
    //     return this.loginService.login(data);
    // }

}
