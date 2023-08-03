import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { OsmModule } from './../src/osm/osm.module';

describe('OsmController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [OsmModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  it('/osm (GET)', () => {
    return request(app.getHttpServer())
      .get('/osm')
      .expect(400)
      .expect({
        message: ['Bbox is not valid'],
        error: 'Bad Request',
        statusCode: 400,
      });
  });
  it.each(['asd', '1,1', '1,1,1', '1,1,1,1,1'])(
    '/osm?bbox=%s (GET)',
    (bbox) => {
      return request(app.getHttpServer())
        .get('/osm?bbox=' + bbox)
        .expect(400)
        .expect({
          message: ['Bbox is not valid'],
          error: 'Bad Request',
          statusCode: 400,
        });
    },
  );

  it('/osm?bbox=1,2,3,4 (GET)', () => {
    return request(app.getHttpServer()).get('/osm?bbox=1,2,3,4').expect(400);
  });
});
