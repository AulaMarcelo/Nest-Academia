import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';


import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { MembroModule } from 'src/membro/membro.module';


@Module({
  imports:[MembroModule],
  providers: [AuthService,LocalStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
