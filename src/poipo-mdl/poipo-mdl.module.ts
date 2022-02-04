import { Module } from '@nestjs/common';
import { PoipoMdlController } from './poipo-mdl.controller';
import { PoipoMdlService } from './poipo-mdl.service';

@Module({
  controllers: [PoipoMdlController],
  providers: [PoipoMdlService]
})
export class PoipoMdlModule {}
