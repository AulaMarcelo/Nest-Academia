import { Test, TestingModule } from '@nestjs/testing';
import { MembroService } from './membro.service';

describe('MembroService', () => {
  let service: MembroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembroService],
    }).compile();

    service = module.get<MembroService>(MembroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
