import { Mailer } from './mailer';
import { Mail } from './mail';

export class MailerMemory implements Mailer {
  private mails: Array<Mail> = [];

  send(mail: Mail): void {
    this.mails.push(mail);
  }
}
