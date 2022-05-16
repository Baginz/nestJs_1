import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from "./pipes/validation.pipe";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  //создаем экземпляр приложения и передаем модуль
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Learn nestJs')
    .setDescription('Doc REST API')
    .setVersion('1.0.0')
    .addTag('Vitaly')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => console.log(`Server started port ${PORT}`));
}
bootstrap();
