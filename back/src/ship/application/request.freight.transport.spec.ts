import { RequestFreightTransport } from './request.freight.transport';
import { NotFoundException } from '@nestjs/common';
import { MemoryShipRepository } from '../infrastructure/memory.ship.repository';
import { MailerMemory } from './mailer.memory';

describe('Request freight transport', () => {
  let shipRepository: MemoryShipRepository;
  let mailer: MailerMemory;

  beforeEach(async () => {
    shipRepository = new MemoryShipRepository();
    mailer = new MailerMemory();
  });

  it('should not request freight transport to an unknown ship', async () => {
    const shipId: number = 105;
    const email: string = 'email@gmail.com';
    const content: string = 'email content';

    const usecase = async () => {
      await new RequestFreightTransport(shipRepository, mailer).execute({
        shipId: shipId,
        email: email,
        content: content,
      });
    };

    await expect(() => usecase()).rejects.toThrowError(NotFoundException);
  });

  it('should not request freight transport to a passengers ship', async () => {
    const shipId: number = 7;
    const email: string = 'email@gmail.com';
    const content: string = 'email content';

    const usecase = async () => {
      await new RequestFreightTransport(shipRepository, mailer).execute({
        shipId: shipId,
        email: email,
        content: content,
      });
    };

    await expect(() => usecase()).rejects.toThrowError(
      'No freight transport on a passenger ship',
    );
  });

  it('should request freight transport to a freight ship', async () => {
    const shipId: number = 1;
    const email: string = 'email@gmail.com';
    const content: string = 'email content';

    await new RequestFreightTransport(shipRepository, mailer).execute({
      shipId: shipId,
      email: email,
      content: content,
    });

    const freightTransportRequests: Array<any> =
      await shipRepository.getFreightTransportRequest(shipId);
    expect(freightTransportRequests).toEqual([
      {
        shipId: shipId,
        email: email,
        content: content,
      },
    ]);
  });
});
