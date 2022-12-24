import { NestFactory } from '@nestjs/core';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000); // на одном порту будет один сервер который работает с 2 протоколами 

    // app.useWebSocketAdapter()


}
bootstrap();
