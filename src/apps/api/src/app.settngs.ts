import * as dotenv from 'dotenv'
dotenv.config()
export class AppSettings {
    public static readonly Port: number = process.env.DEFAULT_SERVER_PORT;
}