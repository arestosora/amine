import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppSettings } from './app.settngs';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(AppSettings.Port);
}
main();
