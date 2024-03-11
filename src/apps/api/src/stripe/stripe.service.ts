import { Inject, Injectable } from '@nestjs/common';
import { AppSettings } from 'src/app.settngs';
import { CustomerDto } from 'src/customers/customer.dto';
import { Services } from 'src/utils/services';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
    constructor(@Inject(Services.Stripe) private readonly stripe: Stripe) { }

    public async checkoutBronzePlan(customer: CustomerDto) {
        return await this.stripe.checkout.sessions.create({
            customer_email: customer.email,
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: 'Bronze Plan',
                            description: 'Get your own personal plan'
                        },
                        currency: 'usd',
                        unit_amount: 1500
                    },
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: AppSettings.Stripe.success_url,
            cancel_url: AppSettings.Stripe.cancel_url,
        });
    }

    public async checkoutSilverPlan(customer: CustomerDto) {
        return await this.stripe.checkout.sessions.create({
            customer_email: customer.email,
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: 'Silver Plan',
                            description: 'Get your own personal plan'
                        },
                        currency: 'usd',
                        unit_amount: 2500
                    },
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: AppSettings.Stripe.success_url,
            cancel_url: AppSettings.Stripe.cancel_url,
        });
    }

    public async checkoutGoldPlan(customer: CustomerDto) {
        return await this.stripe.checkout.sessions.create({
            customer_email: customer.email,
            line_items: [
                {
                    price_data: {
                        product_data: {
                            name: 'Gold Plan',
                            description: 'Get your own personal plan'
                        },
                        currency: 'usd',
                        unit_amount: 3500
                    },
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: AppSettings.Stripe.success_url,
            cancel_url: AppSettings.Stripe.cancel_url,
        });
    }
}
