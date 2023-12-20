import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async createToken(user: any) {
      const payload = { username: user.username, sub: user.userId };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    }
}
