import { DynamicModule, Module, Provider } from '@nestjs/common';
import OpenAI from 'openai';
import { Services } from 'src/utils/services';

@Module({})
export class GptcoreModule {
    public static forRoot(apiKey: string): DynamicModule {
        const OpenAIModule = new OpenAI({ apiKey: apiKey });
        const openAIProvider: Provider = {
            provide: Services.OpenAI,
            useValue: OpenAIModule
        }
        return {
            module: GptcoreModule,
            providers: [openAIProvider],
            exports: [openAIProvider],
            global: true
        }
    }
}
