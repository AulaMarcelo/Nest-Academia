import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';


import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { MembroModule } from 'src/membro/membro.module';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports:[MembroModule,JwtModule.register({
    secret:process.env.JWT_SECRET,
    signOptions:{expiresIn:'1d'},
  })],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
