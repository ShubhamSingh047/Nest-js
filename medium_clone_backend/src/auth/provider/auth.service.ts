import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}
  public login(emial: string, password: string, id: string) {
    const user = this.userService.findOne('123');
    return 'SAMPLE_TOKEN';
  }
  public isAuth() {
    return true;
  }
}
