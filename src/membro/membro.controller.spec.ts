import { Test, TestingModule } from '@nestjs/testing';
import { MembroController } from './membro.controller';
import { MembroService } from './membro.service';

describe('MembroController', () => {
  let controller: MembroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembroController],
      providers: [MembroService],
    }).compile();

    controller = module.get<MembroController>(MembroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
