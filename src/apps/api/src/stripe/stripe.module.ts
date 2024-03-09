import { DynamicModule, Module, Provider } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { Stripe } from 'stripe';
import { Services } from 'src/utils/services';

@Module({
  controllers: [StripeController]
})
export class StripeModule {
  public static forRoot(apiKey: string, options: Stripe.StripeConfig): DynamicModule {
    const stripe = new Stripe(apiKey, options)
    const stripeProvider: Provider = {
      provide: Services.Stripe,
      useValue: stripe
    }
    return {
      module: StripeModule,
      providers: [stripeProvider],
      exports: [stripeProvider],
      global: true
    };
  }
}
