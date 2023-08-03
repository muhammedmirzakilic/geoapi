import { Controller, Get, Query } from '@nestjs/common';
import { OsmService } from './osm.service';
import { FeatureCollection, Geometry } from 'geojson';
import { GetGeoData } from './dto/getGeoData.dto';

@Controller('osm')
export class OsmController {
  constructor(private readonly osmService: OsmService) {}

  @Get()
  getGeoData(@Query() query: GetGeoData): Promise<
    FeatureCollection<
      Geometry,
      {
        [name: string]: any;
      }
    >
  > {
    return this.osmService.getGeoData(query.bbox);
  }
}
