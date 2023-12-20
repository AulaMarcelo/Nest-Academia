import { Body, Controller, Get, Post } from '@nestjs/common';
import { MembroService } from './membro.service';
import { Prisma } from '@prisma/client';

@Controller('membro')
export class MembroController {
  constructor(private readonly membroService: MembroService) {}

  @Post()
  async create(@Body() createAccountDto: Prisma.MembroCreateInput){
    return await this.membroService.create(createAccountDto)
  } 

  @Get()
  async findall(){
     return await this.membroService.findAll();
  }

  @Get()
  async findbyemail(email:string){
     return await this.membroService.findbyemail(email);
  }
}
