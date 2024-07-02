import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BuzzDocument = Buzz & Document;

@Schema()
export class Buzz {
  @Prop()
  content: string;

  @Prop()
  author: string;

  @Prop({ default: Date.now })
  timestamp: Date;

  @Prop({ default: 0 })
  likes: number;
}

export const BuzzSchema = SchemaFactory.createForClass(Buzz);
