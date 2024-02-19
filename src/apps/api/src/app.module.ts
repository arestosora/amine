import { Module } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';
import { StripeModule } from './stripe/stripe.module';
import { PrismaService } from './services/prisma/prisma.service';

@Module({
  imports: [StripeModule],
  controllers: [],
  providers: [StripeService, PrismaService],
})
export class AppModule { }
