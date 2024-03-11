import { Test, TestingModule } from '@nestjs/testing';
import { OpenAIController } from '../src/modules/open-ai/openai.controller';

describe('OpenaiController', () => {
  let controller: OpenAIController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenAIController],
    }).compile();

    controller = module.get<OpenAIController>(OpenAIController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
