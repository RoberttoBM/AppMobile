import { Module } from '@nestjs/common';
import { PerfilController } from './perfil.controller';
import { PerfilService } from './perfil.service';
import { Perfil } from './model/perfil.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
    imports:[TypeOrmModule.forFeature([Perfil])],
    controllers: [PerfilController],
    providers: [PerfilService]
  })
export class PerfilModule {}
