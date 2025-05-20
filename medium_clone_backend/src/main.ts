import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*
   * Use Validation Pipe Globaly!
   */

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //to only allow limited post request
      forbidNonWhitelisted: true, //to throw an error if the request is not allowed
      transform: true, //to transform the request to the dto
    }),
  );

  /*
   * Swagger Configuration!
   */
  const config = new DocumentBuilder().setVersion('1.0').build();

  /*
   *Instantiate Document
   */
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
