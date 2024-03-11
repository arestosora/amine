import { Module } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';
import { PrismaService } from './services/prisma/prisma.service';
import { CustomersModule } from './customers/customers.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [StripeModule, CustomersModule],
  providers: [StripeService, PrismaService],
})
export class AppModule { }
