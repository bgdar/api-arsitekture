import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger :['error','warn', 'verbose','log']
  });
  // console.info("Running : 127.0.0.1:",3000)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
