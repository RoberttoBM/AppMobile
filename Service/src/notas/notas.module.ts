import { Module } from '@nestjs/common';
import { NotasController } from './notas.controller';
import { NotasService } from './notas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notas } from './model/notas.entity'

@Module({
  imports:[TypeOrmModule.forFeature([Notas])],
  controllers: [NotasController],
  providers: [NotasService]
})
export class NotasModule {}
