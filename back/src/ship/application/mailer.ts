import { Mail } from './mail';

export const MAILER = 'MAILER';

export interface Mailer {
  send(mail: Mail): void;
}
