## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Endpoints

### Get

#### /osm
**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `bbox` | required | string  | min Longitude, min Latitude, max Longitude, max Latitude                             |


### Limitations:

1. The maximum bbox size is 0.25.
2. For the /osm endpoint, when the bbox size is large, it takes 3 to 5 seconds to get a response. Implementing it with a stream would decrease the response time, but osmtogeojson doesn't support streams. Implementing a converter from scratch would take a significant amount of time, and it's out of the scope of the project.