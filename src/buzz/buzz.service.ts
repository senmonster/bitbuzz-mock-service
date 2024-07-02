import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Buzz, BuzzDocument } from './schemas/buzz.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class BuzzService {
  constructor(
    @InjectModel(Buzz.name) private buzzModel: Model<BuzzDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async createBuzz(content: string, author: string): Promise<Buzz> {
    const newBuzz = new this.buzzModel({ content, author });
    return newBuzz.save();
  }

  async getBuzzs(): Promise<Buzz[]> {
    return this.buzzModel.find().exec();
  }

  async createComment(
    buzzId: string,
    content: string,
    author: string,
  ): Promise<Comment> {
    const newComment = new this.commentModel({ buzzId, content, author });
    return newComment.save();
  }

  async getComments(buzzId: string): Promise<Comment[]> {
    return this.commentModel.find({ buzzId }).exec();
  }

  async likeBuzz(buzzId: string): Promise<Buzz> {
    return this.buzzModel
      .findByIdAndUpdate(buzzId, { $inc: { likes: 1 } }, { new: true })
      .exec();
  }
}
