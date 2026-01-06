import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
  import { join } from 'path';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule ,{ 
  transport: Transport.GRPC,
  options: {
    package: 'chat',
    protoPath: join(__dirname, 'protobuf/chat.proto'),
  },
  }
  );

  await app.listen();
}
bootstrap();
