import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { PostsService } from './posts/provider/posts.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/provider/auth.service';
import { UsersService } from './users/providers/users.service';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [UsersModule, PostsModule, AuthModule],
  controllers: [
    AppController,
    PostsController,
    AuthController,
    UsersController,
  ],
  providers: [AppService, PostsService, UsersService, AuthService],
})
export class AppModule {}
