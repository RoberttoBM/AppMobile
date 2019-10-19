import { Test, TestingModule } from '@nestjs/testing';
import { NotasService } from './notas.service';

describe('NotasService', () => {
  let service: NotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotasService],
    }).compile();

    service = module.get<NotasService>(NotasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
