import { Test, TestingModule } from '@nestjs/testing';
import { AsistenciasService } from './asistencias.service';

describe('AsistenciasService', () => {
  let service: AsistenciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsistenciasService],
    }).compile();

    service = module.get<AsistenciasService>(AsistenciasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
