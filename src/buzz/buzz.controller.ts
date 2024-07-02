import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { BuzzService } from './buzz.service';
import { Buzz } from './schemas/buzz.schema';
import { Comment } from './schemas/comment.schema';

@Controller('buzzs')
export class BuzzController {
  constructor(private readonly buzzService: BuzzService) {}

  @Post()
  async createBuzz(
    @Body('content') content: string,
    @Body('author') author: string,
  ): Promise<Buzz> {
    return this.buzzService.createBuzz(content, author);
  }

  @Get()
  async getBuzzs(): Promise<Buzz[]> {
    return this.buzzService.getBuzzs();
  }

  @Post(':id/comments')
  async createComment(
    @Param('id') buzzId: string,
    @Body('content') content: string,
    @Body('author') author: string,
  ): Promise<Comment> {
    return this.buzzService.createComment(buzzId, content, author);
  }

  @Get(':id/comments')
  async getComments(@Param('id') buzzId: string): Promise<Comment[]> {
    return this.buzzService.getComments(buzzId);
  }

  @Patch(':id/like')
  async likeBuzz(@Param('id') buzzId: string): Promise<Buzz> {
    return this.buzzService.likeBuzz(buzzId);
  }
}
