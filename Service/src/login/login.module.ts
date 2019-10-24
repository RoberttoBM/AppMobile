import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { AuthModule } from './../auth/auth.module';
import { UserModule } from './../user/user.module';

@Module({
  imports:[AuthModule, UserModule],
  providers: [LoginService],
  controllers: [LoginController]
})
export class LoginModule {}
