import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy,'jwt') {
    constructor(private readonly authService: AuthService) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: '12345', // Troque pela sua chave secreta
      });
    }
  
    async validate(payload: any) {
      // Aqui você pode implementar a lógica para validar o usuário com base no payload do token
      // Por exemplo, você pode consultar o banco de dados para obter informações do usuário.
      return { userId: payload.sub, username: payload.username };
    }
  }