import { Module } from '@nestjs/common';
import { OsmController } from './osm.controller';
import { OsmService } from './osm.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [OsmController],
  providers: [OsmService],
})
export class OsmModule {}
