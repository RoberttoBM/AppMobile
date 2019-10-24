import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './../auth/auth.service';

@Controller('login')
export class LoginController {

    constructor(private readonly authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post()
    async login(@Request() req) {
        console.log(req.user);
        return this.authService.login(req.user);
    }


    //constructor(private loginService: LoginService) { }

    // @Post('login')
    // login(@Body() data: Credential){
    //     return this.loginService.login(data);
    // }

}
