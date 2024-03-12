import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma/prisma.service';
import { CustomersModule } from './modules/customers/customers.module';
import { StripeModule } from './modules/stripe/stripe.module';
import { OpenAIModule } from './modules/open-ai/open-ai.module';

@Module({
  imports: [StripeModule, CustomersModule, OpenAIModule],
  providers: [PrismaService],
})
export class AppModule { }
