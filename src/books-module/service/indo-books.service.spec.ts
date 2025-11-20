import { Test, TestingModule } from '@nestjs/testing';
import { IndoBooksService } from './indo-books.service';

describe('IndoBooksService', () => {
  let service: IndoBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndoBooksService],
    }).compile();

    service = module.get<IndoBooksService>(IndoBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
