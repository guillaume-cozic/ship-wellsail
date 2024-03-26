import { Controller, Get } from '@nestjs/common';
import { MemoryShipRepository } from './memory.ship.repository';

@Controller()
export class ShipController {
  constructor(private readonly memoryShipRepository: MemoryShipRepository) {}

  @Get('ships')
  getShips(): Promise<Array<Ship>> {
    return this.memoryShipRepository.search();
  }
}
