import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/provider/auth.service';
import { GetUserParamDto } from 'src/users/dtos/get-user-params.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(getUserParamDto: GetUserParamDto, limt: number, page: number) {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        id: 2,
        name: 'Shubham Singh',
        email: 'Shubham.singh@example.com',
      },
    ];
  }

  public findOne(userId: string) {
    return {
      id: userId,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
  }
}
