import type { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ChatService } from './chat.service';

// sesui dengan file di .protobuf
interface Chat {
  id: number;
  message: string;
}

interface ChatById {
  id: number;
}

@Controller('chat')
export class ChatController {

  private chatService : ChatService ;

  private readonly chat: Chat[] = [
    { id: 1, message: 'jamala saulan' },
    { id: 2, message: 'jamalaasasa a' },
  ];

  @GrpcMethod('ChatService', 'FindOne')
  FindOne(data: ChatById, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    return this.chat.find((v) => v.id === data.id);
  }
}
