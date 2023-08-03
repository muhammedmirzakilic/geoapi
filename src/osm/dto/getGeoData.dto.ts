import { Validate } from 'class-validator';
import { BboxValidator } from '../validators/bbox.validator';

export class GetGeoData {
  @Validate(BboxValidator)
  bbox: string;
}
