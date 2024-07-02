import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuzzService } from './buzz.service';
import { BuzzController } from './buzz.controller';
import { Buzz, BuzzSchema } from './schemas/buzz.schema';
import { Comment, CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Buzz.name, schema: BuzzSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
  ],
  providers: [BuzzService],
  controllers: [BuzzController],
})
export class BuzzModule {}
