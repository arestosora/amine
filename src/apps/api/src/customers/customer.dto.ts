import { IsDate, IsEmail } from "class-validator";

export class CustomerDto {
    @IsEmail()
    public email: string;
    @IsDate()
    public createdAt?: Date;
    @IsDate()
    public updatedAt?: Date;
}