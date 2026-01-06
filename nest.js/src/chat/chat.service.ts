import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';


// sesui dengan isi file protobuf
interface ChatProtoService {
  findOne(data : {id : number }) : Observable<{
    id : number ,
    chat : string,
  }>
}

@Injectable()
export class ChatService implements OnModuleInit {
  
  private chatProtoService : ChatProtoService;
  constructor(@Inject("CHAT_PACKAGE") private client : ClientGrpc ){}
   
  onModuleInit() {
    this.chatProtoService = this.client.getService<ChatProtoService>('ChatService');
  }

  getChat() {
    return this.chatProtoService.findOne({ id: 1 });
  }

 }
