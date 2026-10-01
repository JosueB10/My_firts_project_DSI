import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';

import { loginDto } from './dto/login.dto.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: loginDto) {
    const usertoken = await this.authService.validateUser(data);

    if (!usertoken) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return {
      access_token: usertoken,
    };
  }
}