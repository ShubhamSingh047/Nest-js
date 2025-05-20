import { PartialType } from '@nestjs/mapped-types';
import { CreatUserDtos } from './create-users.dto';

export class PatchUserDto extends PartialType(CreatUserDtos) {}
