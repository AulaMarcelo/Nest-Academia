import { Module } from '@nestjs/common';
import { MembroService } from './membro.service';
import { MembroController } from './membro.controller';

@Module({
  controllers: [MembroController],
  providers: [MembroService],
  exports:[MembroService]
})
export class MembroModule {}
