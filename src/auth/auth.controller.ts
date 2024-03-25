import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServise: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async login(@Body() loginDto: LoginDto): Promise<ReturnUserDto> {
    return new ReturnUserDto(await this.authServise.login(loginDto));
  }
}