import { Test, TestingModule } from '@nestjs/testing';
import { PoipoController } from './poipo.controller';

describe('PoipoController', () => {
  let controller: PoipoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoipoController],
    }).compile();

    controller = module.get<PoipoController>(PoipoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
