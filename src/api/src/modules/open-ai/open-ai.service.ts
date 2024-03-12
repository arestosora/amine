import { Inject, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { Services } from 'src/utils/services';
import { Prompt } from './gpt.dto';

@Injectable()
export class OpenAiService {
    constructor(@Inject(Services.OpenAI) private readonly openAI: OpenAI) { }

    public async createRequest(metadata: Prompt) {
        return await this.openAI.chat.completions.create({
            messages: [{ role: 'assistant', content: metadata.prompt }],
            model: 'gpt-3.5-turbo-0125'
        });
    }
}
