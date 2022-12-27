import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { AppModule } from './app.module';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const PORT = app.get(ConfigService).get('APP_PORT')

    await app.listen(PORT); // на одном порту будет один сервер который работает с 2 протоколами 
}
bootstrap();
