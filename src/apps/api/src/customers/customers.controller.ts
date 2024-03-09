import { Controller, Get, Inject } from '@nestjs/common';
import { Services } from 'src/utils/services';
import { Stripe } from 'stripe';

@Controller('customers')
export class CustomersController {
    constructor(@Inject(Services.Stripe) private readonly stripe: Stripe) { }
    @Get('/')
    public index() {
        return this.stripe.customers.list()
    }
}
