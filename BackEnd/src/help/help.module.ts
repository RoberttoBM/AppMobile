import { Module } from '@nestjs/common';
import { HelpController } from './help.controller';
import { HelpService } from './help.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Help } from './model/help.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Help])],
  controllers: [HelpController],
  providers: [HelpService],
  exports:[HelpService]
})
export class HelpModule {}
