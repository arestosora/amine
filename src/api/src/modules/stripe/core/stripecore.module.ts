import { DynamicModule, Module, Provider } from '@nestjs/common';
import { StripeModule } from '../stripe.module';
import { Services } from 'src/utils/services';
import Stripe from 'stripe';

@Module({})
export class StripeCoreModule {
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
