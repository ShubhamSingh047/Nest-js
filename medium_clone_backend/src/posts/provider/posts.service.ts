import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public findAll(userId: string) {
    const user = this.usersService.findOne(userId);
    return [
      {
        id: user.id,
        title: 'Post 1',
        content: 'Content 1',
      },
    ];
  }
}
