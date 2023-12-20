import { Injectable } from '@nestjs/common';
import { MembroService } from 'src/membro/membro.service';
import * as bccrypt from 'bcrypt'
import { Prisma } from '@prisma/client';
import { UserPayload } from './models/membro-payload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/user-token';

@Injectable()
export class AuthService {

  constructor(
    private readonly membroService: MembroService,
    private readonly  jwtService:JwtService
  ){}
 
  login(user: Prisma.MembroCreateInput):UserToken {
    //trasforme membro em jwt
    const payload:UserPayload = {
       sub:user.id,  
       email:user.email,
       name:user.nome,
    }
    const jwtToken = this.jwtService.sign(payload);
    return {
      access_token: jwtToken
    }

  }
 
  async validateUser(email: string, password: string) {
    const user = await this.membroService.findbyemail(email);
    console.log("user",user)
    if(user) {
      //checar se a senha corresponde a hash
      const isPasswordValid = await bccrypt.compare(password,user.password);
      if(isPasswordValid){
        return {
          ...user,
          password: undefined
        }
      }
    }

    //se chegar aqui querdize que não encontrou user ou a senha e email
    throw new Error('Email ou Senha está incorreta')
    
  }
}
