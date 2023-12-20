import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import * as bycrypt from 'bcrypt'
@Injectable()
export class MembroService {
  constructor(private prisma:PrismaService){}

  async create(createMembroDto: Prisma.MembroCreateInput){
    
    const mebroExists = await this.prisma.membro.findFirst({
      where:{
        email:createMembroDto.email
      }
    })
    if(mebroExists) {
      return {errror:"Usuario já existe"};
    }
    
    const data = {
      ...createMembroDto,
      password:await bycrypt.hash(createMembroDto.password,10),
    }
    const membro =  await this.prisma.membro.create({data})

    return {
      ...membro,
      password:undefined,
    };
  }

  async findAll(){
    const membros = await this.prisma.membro.findMany();
    return membros;
  }


  async findbyemail(email:string){
     const membro= await this.prisma.membro.findUnique({
      where:{
        email
      }
     })

      return membro;
  }
}
