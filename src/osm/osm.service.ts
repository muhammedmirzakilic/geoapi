import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as osmtogeojson from 'osmtogeojson';
import { FeatureCollection, Geometry } from 'geojson';

@Injectable()
export class OsmService {
  readonly osmUrl = 'https://www.openstreetmap.org/api/0.6/map?bbox=';
  constructor(private readonly httpService: HttpService) {}

  async getGeoData(bbox: string): Promise<
    FeatureCollection<
      Geometry,
      {
        [name: string]: any;
      }
    >
  > {
    const osm = await this.httpService.axiosRef.get(this.osmUrl + bbox);

    const response = osmtogeojson(osm.data);
    return response;
  }
}
