import { Injectable } from '@nestjs/common';
import { MembroService } from 'src/membro/membro.service';
import * as bccrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private readonly membroService: MembroService){}
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
