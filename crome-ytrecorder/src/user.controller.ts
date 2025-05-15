import { Controller, Get, Param } from '@nestjs/common';

interface User {
  name: string;
  id: string;
}

@Controller('/users')
class UserController {
  @Get('/profile')
  getProfile(): User {
    return {
      name: 'Shubham',
      id: 'default',
    };
  }

  @Get('/profile/:id')
  getProfileById(@Param('id') id: string): Promise<User> {
    return new Promise((resolve) => {
      resolve({
        name: 'Shubham',
        id: id,
      });
    });
  }
}

export default UserController;
