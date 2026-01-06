import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
 imports : [
    ClientsModule.register([
      {
        name  : "CHAT_PACKAGE",
        transport : Transport.GRPC,
        options : {
          package : "chat",
          protoPath : join(__dirname, "../protobuf/chat.proto")
        }
      }
    ])
  ],
  controllers: [ChatController],
  providers: [ChatService]
})
export class ChatModule {}
