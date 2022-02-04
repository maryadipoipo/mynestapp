import { Test, TestingModule } from '@nestjs/testing';
import { PoipoMdlService } from './poipo-mdl.service';

describe('PoipoMdlService', () => {
  let service: PoipoMdlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoipoMdlService],
    }).compile();

    service = module.get<PoipoMdlService>(PoipoMdlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
