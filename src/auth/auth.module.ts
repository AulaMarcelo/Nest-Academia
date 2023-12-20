import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';
import { AuthService } from './auth/auth.service';


@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // Troque pelo sua chave secreta
      signOptions: { expiresIn: '1h' }, // Defina a expiração do token
    }),
  ],
  providers: [AuthService, JwtStrategyService, JwtStrategyService],
  exports: [AuthService],
})
export class AuthModule {}
