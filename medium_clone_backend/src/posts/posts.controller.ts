import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './provider/posts.service';

@Controller('posts')
export class PostsController {
  /*
     Injecting Post Service
    */
  constructor(private readonly postService: PostsService) {}

  @Get(['', '/:userId'])
  public getPosts(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }
}
