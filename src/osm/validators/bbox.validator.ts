import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  isLatitude,
  isLongitude,
} from 'class-validator';

@ValidatorConstraint()
export class BboxValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    const bbox = value.split(',');
    if (bbox.length !== 4) {
      return false;
    }
    const [minLon, minLat, maxLon, maxLat] = bbox;
    if (
      !isLongitude(minLon) ||
      !isLongitude(maxLon) ||
      !isLatitude(minLat) ||
      !isLatitude(maxLat)
    ) {
      return false;
    }
    return true;
  }
  defaultMessage(): string {
    return 'Bbox is not valid';
  }
}
