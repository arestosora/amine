import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CustomerDto } from 'src/customers/customer.dto';

@Controller('stripe/checkout')
export class StripeController {
    constructor(private readonly stripeService: StripeService) { }

    @Post('bronze')
    public bronze(@Body() customer: CustomerDto) {
        return this.stripeService.checkoutBronzePlan(customer);
    }

    @Post('silver')
    public silver(@Body() customer: CustomerDto) {
        return this.stripeService.checkoutSilverPlan(customer);
    }

    @Post('gold')
    public gold(@Body() customer: CustomerDto) {
        return this.stripeService.checkoutGoldPlan(customer);
    }
}
