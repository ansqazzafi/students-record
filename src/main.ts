import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomExceptionFilter } from './ExceptionHandler/custom-exceptionFilter';
async function bootstrap() {  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),)

    app.useGlobalFilters(new CustomExceptionFilter())
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
