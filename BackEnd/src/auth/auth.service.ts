import { Injectable, Get } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUserName(username);
    if (user && user.CONTRPER === pass) {
      const { CONTRPER, ...result } = user;
      return result;
    }
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    user.access_token = this.jwtService.sign(payload);
    return user;

    
  }

}