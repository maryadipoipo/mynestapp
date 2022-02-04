import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoipoController } from './poipo/poipo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PoipoMdlModule } from './poipo-mdl/poipo-mdl.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-poipo'),
    PoipoMdlModule
  ],
  controllers: [AppController, PoipoController],
  providers: [AppService],
})
export class AppModule {}
