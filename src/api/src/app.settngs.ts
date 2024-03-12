import * as dotenv from 'dotenv'
dotenv.config()

export class AppSettings {
    public static readonly Port: number = process.env.DEFAULT_SERVER_PORT || 3000;

    public static Stripe = {
        apiKey: process.env.STRIPE_SECRET_KEY,
        cancel_url: 'https://google.com',
        success_url: 'https://google.com',
    }

    public static OpenAI = {
        apiKey: process.env.OPENAI_SECRET_KEY
    }
}
