import { SHIP_REPOSITORY, ShipRepository } from '../domain/ship.repository';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Ship } from '../domain/ship';
import { MAILER, Mailer } from './mailer';

@Injectable()
export class RequestFreightTransport {
  constructor(
    @Inject(SHIP_REPOSITORY) private readonly shipRepository: ShipRepository,
    @Inject(MAILER) private readonly mailer: Mailer,
  ) {}

  async execute(params: { shipId: number; email: string; content: string }) {
    const ship: Ship = await this.shipRepository.getById(params.shipId);

    if (ship === undefined) {
      throw new NotFoundException('Ship not found');
    }

    if (ship.type === 'passengers') {
      throw new Error('No freight transport on a passenger ship');
    }

    this.shipRepository.saveFreightTransportRequest(params);

    this.mailer.send({
      to: params.email,
      content: params.content,
      subject: 'Freight request',
    });
  }
}
