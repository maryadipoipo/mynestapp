import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Poipo, PoipoSchema } from './entities/poipo.entity';
import { PoipoMdlController } from './poipo-mdl.controller';
import { PoipoMdlService } from './poipo-mdl.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {name: Poipo.name, schema: PoipoSchema}
      ]
    )
  ],
  controllers: [PoipoMdlController],
  providers: [PoipoMdlService]
})
export class PoipoMdlModule {}
