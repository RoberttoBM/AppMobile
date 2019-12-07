import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { NotasModule } from './notas/notas.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { AuthModule } from './auth/auth.module';
import { HelpModule } from './help/help.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "oracle",
    "username": "db_EDOOCA",
    "password": "db_EDOOCA-2019",
    "connectString": "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=34.69.77.101)(PORT=1521))(CONNECT_DATA=(SID=XE)))",
    "synchronize": false,
    "logging": true,
    "entities": [__dirname + '/**/**.entity{.ts,.js}']
  }), UserModule, NotasModule, AsistenciasModule, AuthModule, UserModule, HelpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
