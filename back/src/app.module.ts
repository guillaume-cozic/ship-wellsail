import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShipController } from './ship/application/http/ship.controller';
import { MemoryShipRepository } from './ship/infrastructure/memory.ship.repository';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { RequestFreightTransport } from './ship/application/request.freight.transport';
import { MailerProvider, MeetingRepositoryProvider } from './ship/Providers';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [ShipController],
  providers: [
    MemoryShipRepository,
    RequestFreightTransport,
    MeetingRepositoryProvider,
    MailerProvider,
  ],
})
export class AppModule {}
