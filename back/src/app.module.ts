import { Module } from '@nestjs/common';
import { ShipController } from './ship/ship.controller';
import { MemoryShipRepository } from './ship/memory.ship.repository';

@Module({
  imports: [],
  controllers: [ShipController],
  providers: [MemoryShipRepository],
})
export class AppModule {}
