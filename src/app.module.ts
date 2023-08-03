import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OsmModule } from './osm/osm.module';

@Module({
  imports: [OsmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
