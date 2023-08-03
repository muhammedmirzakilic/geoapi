import { Test } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { OsmController } from './osm.controller';
import { OsmService } from './osm.service';

describe('OsmController', () => {
  let osmController;
  let osmService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [OsmController],
      providers: [OsmService],
    }).compile();
    osmService = moduleRef.get<OsmService>(OsmService);
    osmController = moduleRef.get<OsmController>(OsmController);
  });
  describe('getGeoData', () => {
    it('should return a geojson feature collection', async () => {
      const result = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              id: 1,
            },
            geometry: {
              type: 'Point',
              coordinates: [1, 2],
            },
          },
        ],
      };
      jest.spyOn(osmService, 'getGeoData').mockImplementation(() => result);
      expect(await osmController.getGeoData({ bbox: '1,2,3,4' })).toBe(result);
    });
    it('should return error message when bbox is invalid', async () => {
      const result = 'Invalid bbox';
      jest.spyOn(osmService, 'getGeoData').mockImplementation(() => result);
      expect(await osmController.getGeoData({ bbox: '1,2,3' })).toBe(result);
    });
  });
});
