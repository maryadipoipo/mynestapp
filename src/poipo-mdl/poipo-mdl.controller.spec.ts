import { Test, TestingModule } from '@nestjs/testing';
import { PoipoMdlController } from './poipo-mdl.controller';

describe('PoipoMdlController', () => {
  let controller: PoipoMdlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoipoMdlController],
    }).compile();

    controller = module.get<PoipoMdlController>(PoipoMdlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
