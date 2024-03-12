import { Body, Controller, Post } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { CustomerDto } from 'src/modules/customers/customer.dto';
import { Controllers, Methods } from 'src/utils/constants';

@Controller(Controllers.Stripe)
export class StripeController {
    constructor(private readonly stripeService: StripeService) { }

    @Post(Methods.StripeBronze)
    public bronze(@Body() customer: CustomerDto) {
        return this.stripeService.checkoutBronzePlan(customer);
    }

    @Post(Methods.StripeSilver)
    public silver(@Body() customer: CustomerDto) {
        return this.stripeService.checkoutSilverPlan(customer);
    }

    @Post(Methods.StripeGold)
    public gold(@Body() customer: CustomerDto) {
        return this.stripeService.checkoutGoldPlan(customer);
    }
}
