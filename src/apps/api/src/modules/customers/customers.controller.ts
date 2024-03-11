import { Controller, Get, Inject } from '@nestjs/common';
import { Controllers } from 'src/utils/constants';
import { Services } from 'src/utils/services';
import { Stripe } from 'stripe';

@Controller(Controllers.Customers)
export class CustomersController {
    constructor(@Inject(Services.Stripe) private readonly stripe: Stripe) { }
    @Get('/')
    public index() {
        return this.stripe.customers.list()
    }
}
