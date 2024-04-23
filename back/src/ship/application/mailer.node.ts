import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Mail } from './mail';

@Injectable()
export class MailerNode {
  constructor(private readonly mailerService: MailerService) {}

  public send(mail: Mail): void {
    this.mailerService
      .sendMail({
        to: mail.to,
        from: 'contact@wellsail.com',
        subject: mail.subject,
        html: mail.content,
      })
      .then(() => {})
      .catch(() => {});
  }
}
