import { Body, Controller, Post } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { Prompt } from './gpt.dto';
import { BodyRequests, Controllers, Methods } from 'src/utils/constants';

@Controller(Controllers.OpenAI)
export class OpenAIController {
    constructor(private readonly openAIService: OpenAiService) { }

    @Post(Methods.OpenAIRequest)
    public async request(@Body(BodyRequests.OpenAIMetaData) metadata: Prompt) {
        return await this.openAIService.createRequest(metadata);
    }
}
