import { Module } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { GptcoreModule } from './core/gptcore.module';
import { AppSettings } from 'src/app.settngs';
import { OpenAIController } from './openai.controller';

@Module({
    providers: [OpenAiService],
    imports: [GptcoreModule.forRoot(AppSettings.OpenAI.apiKey)],
    controllers: [OpenAIController]
})
export class OpenAIModule { }
