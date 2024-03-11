import { IsJSON } from "class-validator";

export class Prompt {
    @IsJSON()
    public prompt: string;
}