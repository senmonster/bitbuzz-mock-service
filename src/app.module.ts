import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuzzModule } from './buzz/buzz.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/weibo_db'),
    BuzzModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
