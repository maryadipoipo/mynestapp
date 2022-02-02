import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoipoController } from './poipo/poipo.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-poipo')
  ],
  controllers: [AppController, PoipoController],
  providers: [AppService],
})
export class AppModule {}
