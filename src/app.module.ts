import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoipoController } from './poipo/poipo.controller';

@Module({
  imports: [],
  controllers: [AppController, PoipoController],
  providers: [AppService],
})
export class AppModule {}
