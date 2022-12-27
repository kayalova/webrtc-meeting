import {
    WebSocketGateway,
    SubscribeMessage,
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Socket, Server } from 'socket.io';


@WebSocketGateway(3004, {
    namespace: 'qu',
    cors: { origin: '*' }
})
export class MeetingGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    server: Server;

    afterInit(server: Server) {
        console.log('[Server] init')
    }

    handleConnection(client: Socket, ...args: any[]) {
        console.log('[Server] client connected')
    }

    handleDisconnect(client: any) {
        console.log('[Server] client disconnected')
    }

    @SubscribeMessage('hello')
    public test(socket: Socket, data: any) {
        console.log('[Server] Got message')
        console.log(data)
        return 'ping'
    }
}