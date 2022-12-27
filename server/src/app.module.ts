import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MeetingGateway } from './meeting.gateway';

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true,
        cache: true
    })],
    controllers: [],
    providers: [MeetingGateway],
})
export class AppModule { }
