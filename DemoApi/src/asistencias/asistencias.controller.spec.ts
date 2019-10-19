import { Test, TestingModule } from '@nestjs/testing';
import { AsistenciasController } from './asistencias.controller';

describe('Asistencias Controller', () => {
  let controller: AsistenciasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsistenciasController],
    }).compile();

    controller = module.get<AsistenciasController>(AsistenciasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
