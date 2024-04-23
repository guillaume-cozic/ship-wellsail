import { MemoryShipRepository } from './infrastructure/memory.ship.repository';
import { SHIP_REPOSITORY } from './domain/ship.repository';
import { MAILER } from './application/mailer';
import { MailerMemory } from './application/mailer.memory';
import { MailerNode } from './application/mailer.node';

export const MeetingRepositoryProvider = {
  provide: SHIP_REPOSITORY,
  useClass:
    process.env.ENV === 'testing' ? MemoryShipRepository : MemoryShipRepository,
};

export const MailerProvider = {
  provide: MAILER,
  useClass:
    process.env.ENV === 'testing' ? MailerMemory : MailerNode,
};
