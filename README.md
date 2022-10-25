# Node API Boilerplate

Boilerplate project with some utilities for creating APIs with Node JS. Some features already preconfigured here are:

  - Dynamic route loading
  - Testing suite (JEST)
  - Docker

### 1)  Dependencies  

As soon as you clone the project from the repository you must run `npm i` in order to download the dependencies of tools used in the app.
 
### 2) Configuring the application
 
  - Duplicate `sample.env`
  - Rename the duplicate to `.env` 
  
If you need to change the default settings, do so into the `.env` files.

> New environment configurations can be added. However, it's strongly suggested to replicate those on `sample.env` as well (since that's the file being tracked on git).

The current options available on the `sample.env` file are:

|   KEY 	    |  DESCRIPTION  	                                      |  EXAMPLE 	                                          | DEFAULTS  |
|---	        |---	                                                  |---	                                                | --------- |
|  PORT 	    | Port in which the application will be running         |  9054 	                                            | 3000      |
|  HOST 	    | Hostname in which the application will be running  	  |  https://base.com	                                  | localhost |
|  LOG_PATH 	|  Path to the location where the logs must be stored 	|  /home/user/base/logs 	                            | logs      |
|  LOG_LEVEL 	|  Minimal log level to be persisted 	                  |  TRACE or DEBUG or INFO or WARN or ERROR or FATAL 	| WARN      |
|  BREAK_ON_ROUTE_ERROR 	|  Defines if dynamic router loader should halt the app or not | 1 (enabled) or 0 (disabled) 	| true      |

### 3) Running the app
 
- `npm start:docker` will run docker-compose. If you don't have docker installed, do so following the [documentation](https://docs.docker.com/engine/install/).

- `npm start` will run the application locally without using docker.

> Note: Doing this way you may not leverage any future containers that you can add on you `docker-compose.yml` file for databases and things alike.

### 4) Executing test suite

- `npm run test` will run test suite once.

- `npm run test:watch` will watch for changes on the test suite and reran the tests that had some change.

- `npm run test:coverage` will generate a report of JEST test coverage.
