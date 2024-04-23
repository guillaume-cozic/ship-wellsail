import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Ship } from '../../domain/ship';
import { MemoryShipRepository } from '../../infrastructure/memory.ship.repository';
import { FreightTransportRequestDto } from './freight.transport.request.dto';
import { RequestFreightTransport } from '../request.freight.transport';

@Controller()
export class ShipController {
  constructor(
    private readonly memoryShipRepository: MemoryShipRepository,
    private readonly requestFreightTransportUsecase: RequestFreightTransport,
  ) {}

  @Get('ships')
  getShips(@Query('type') type): Promise<Array<Ship>> {
    return this.memoryShipRepository.search({ type: type });
  }

  @Post('freight-transport')
  async requestFreightTransport(
    @Body() freightTransportRequestDto: FreightTransportRequestDto,
  ): Promise<void> {
    return await this.requestFreightTransportUsecase.execute({
      shipId: freightTransportRequestDto.shipId,
      email: freightTransportRequestDto.email,
      content: freightTransportRequestDto.content,
    });
  }
}
