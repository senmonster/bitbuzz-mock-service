import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ type: Types.ObjectId, ref: 'Weibo' })
  buzzId: Types.ObjectId;

  @Prop()
  content: string;

  @Prop()
  author: string;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
