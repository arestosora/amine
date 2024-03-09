import { Module } from '@nestjs/common';
import { StripeService } from './stripe/stripe.service';
import { StripeModule } from './stripe/stripe.module';
import { PrismaService } from './services/prisma/prisma.service';
import { AppSettings } from './app.settngs';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [StripeModule.forRoot(AppSettings.Stripe.apiKey, { apiVersion: '2023-10-16' }), CustomersModule],
  providers: [StripeService, PrismaService],
})
export class AppModule {}
