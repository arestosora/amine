export enum Controllers {
    Customers = 'customers',
    Stripe = 'stripe/checkout',
    OpenAI = 'open-ai'
}

export enum Methods {
    OpenAIRequest = 'request',
    StripeBronze = 'bronze',
    StripeSilver = 'silver',
    StripeGold = 'gold'
}

export enum BodyRequests {
    OpenAIMetaData = 'metadata'
}
