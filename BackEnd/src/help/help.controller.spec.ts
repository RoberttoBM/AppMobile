import { Test, TestingModule } from '@nestjs/testing';
import { HelpController } from './help.controller';

describe('Help Controller', () => {
  let controller: HelpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpController],
    }).compile();

    controller = module.get<HelpController>(HelpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
